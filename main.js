// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

// Reload window when a change is detected in the code
try {
  require('electron-reloader')(module);
} catch (err) {}

// Keep a global reference of the window object, if we don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "Scientific Calculator",
    width: 600,
    height: 380,
    'minHeight': 300,
    'minWidth': 300,
    'maxHeight': 380,
    'maxWidth': 600,
    frame: false,
  })

  // and load the index.html of the app.
  mainWindow.loadFile('ui/main_view.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
    app.quit()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
  createWindow();
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  app.quit()
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('close-click', function () {
  closeWindow();
})

ipcMain.on('minimize-click', function () {
  mainWindow.minimize()
})