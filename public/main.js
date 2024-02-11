// electron.js
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

require("@electron/remote/main").initialize();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "Boise",
    fullscreen: true,
    //fullscreenable: true,
    resizable: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      devTools: false,
      enableRemoteModule: true,
      contextIsolation: false
    },
  });
  win.setMenu(null);
  if (false) {
    win.loadURL("http://localhost:3000");
    const icon = path.join(__dirname, "../public/diamond.png");
    win.setIcon(icon);
    win.webContents.openDevTools();
    win.setOverlayIcon(icon);
  } else {
    win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
    const icon = path.join(__dirname, "../build/diamond.png");
    win.setIcon(icon);
    win.setOverlayIcon(icon);
  }
  // win.webContents.openDevTools(); //{ mode: 'detach' }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('quit', () => {
  app.quit();
})
