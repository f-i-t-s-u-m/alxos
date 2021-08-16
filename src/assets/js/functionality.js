const {ipcRenderer} = require('electron');
const ipc = ipcRenderer;
closeWindowBtn.addEventListener('click', () => {
     ipc.send('closeWindows')
}, false);

minimizeWindowBtn.addEventListener('click', () => {
    ipc.send('minimizeWindow')
}, false);

maximizeRestoreWindowBtn.addEventListener('click', () => {
     ipc.send('maximizeRestoreWindow')
 }, false);

 ipc.on('isMaximized', () => {
     ipc.removeAllListeners('isMaximized')
      document.getElementById('maxResImg').src="./assets/images/cube_black.svg"
 })

 ipc.on('isRestored', () => {
     ipc.removeAllListeners('isRestored')
     document.getElementById('maxResImg').src="./assets/images/stop_black.svg"

})

ipc.on('update_available', () => {
     ipc.removeAllListeners('update_available')
     document.getElementById('logo_text').innerHTML = "<h6>update is available</h6>"

})

ipc.on('update_downloaded', () => {
     ipc.removeAllListeners('update_downloaded')
     document.getElementById('logo_text').innerHTML = "<h6>finished downloading</h6>"

})

nav_smart_barBtn.addEventListener('click', () => {
     let navBtn = document.getElementById('os_side_nav');
 
     if (!navBtn.classList.contains('hidden')) {
          navBtn.classList.add('hidden')
     }
     else {navBtn.classList.remove('hidden')}
}, false)





