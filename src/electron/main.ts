import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import IpcMain from './ipc-main';

export default class Main {

  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow: typeof BrowserWindow;

  private static onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      Main.application.quit();
    }
  }

  private static onClose() {
    Main.mainWindow = null;
  }

  private static onReady() {
    console.log("OnReady called");
    Main.mainWindow = new Main.BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'index.js'),
      },
    });
    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
      Main.mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
      Main.mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }

    // Open the DevTools.
    Main.mainWindow.webContents.openDevTools();

    Main.mainWindow.on('closed', Main.onClose);
  }

  private static onActivate() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    console.log("OnActivate called");
    if (BrowserWindow.getAllWindows().length === 0) {
      Main.onReady();
    }

  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the  
    // Electron.BrowserWindow into this function 
    // so this class has no dependencies. This 
    // makes the code easier to write tests for
    console.log("main called");
    // Handle creating/removing shortcuts on Windows when installing/uninstalling.
    if (require('electron-squirrel-startup')) {
      app.quit();
    }

    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on('window-all-closed', Main.onWindowAllClosed);
    Main.application.on('ready', Main.onReady);
    Main.application.on('activate', Main.onActivate);

    //To disable the annoying security warnings in browser console
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
  }
}

Main.main(app, BrowserWindow);
IpcMain.main(ipcMain);