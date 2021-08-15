const {ipcRenderer} = require('electron');
const ipc = ipcRenderer;
closeWindowBtn.addEventListener('click', () => {
     ipc.send('closeWindows')
});

minimizeWindowBtn.addEventListener('click', () => {
    ipc.send('minimizeWindow')
});

maximizeRestoreWindowBtn.addEventListener('click', () => {
     ipc.send('maximizeRestoreWindow')
 });

 ipc.on('isMaximized', () => {
      document.getElementById('maxResImg').src="./assets/images/cube_black.svg"
 })

 ipc.on('isRestored', () => {
     document.getElementById('maxResImg').src="./assets/images/stop_black.svg"

})

nav_smart_barBtn.addEventListener('click', () => {
     let navBtn = document.getElementById('os_side_nav');
 
     if (!navBtn.classList.contains('hidden')) {
          navBtn.classList.add('hidden')
     }
     else {navBtn.classList.remove('hidden')}
}, false)





