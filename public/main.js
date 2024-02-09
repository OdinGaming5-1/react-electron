// electron.js
const { app, BrowserWindow } = require('electron');
const path = require('path')

require("@electron/remote/main").initialize();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  win.setMenu(null);
  if(true)
  {
    win.loadURL('http://localhost:3000');
  }
  else{
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  }
  //win.webContents.openDevTools({ mode: 'detach' });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})