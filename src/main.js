const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain;
// Handle creating/removing shortcuts on Windows when installing/uninstalling.


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:500,
    icon:'./assets/images/logo.ico',
   frame:false,
    // webPreferences: {
    //   // nodeIntegration: true,
    //   webviewTag: true
    // }

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webviewTag: true
    },
  });
  // const view = new BrowserView()
  // mainWindow.setBrowserView(view)
  // view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  // view.webContents.loadURL('https://electronjs.org')
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  // custom close window

  ipc.on('closeWindows', () => {
    mainWindow.close();
  }) 

  ipc.on('minimizeWindow', () => {
    mainWindow.minimize();
  }) 

  ipc.on('maximizeRestoreWindow', () => {
    if(mainWindow.isMaximized()) {

      mainWindow.restore();
    }
    else {
      mainWindow.maximize();
    }
  });

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('isMaximized')
  })

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('isRestored')
})



};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
