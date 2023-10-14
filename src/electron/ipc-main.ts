import { IpcMainEvent, ipcMain } from "electron";

export default class IpcMain {

  static ipc: typeof ipcMain;

  private static greet(event: IpcMainEvent, name: string) {
    console.log("Data coming from ipcRenderer : " + name);
    const data = `Hello from ipcMain Dear ${name}`
    event.sender.send("greet-response", data)
  }

  private static syncMsg(event: IpcMainEvent, args: string) {
    console.log("Received from client : " + args);
    event.returnValue = 'pong';

  }


  static main(ipc: typeof ipcMain) {
    IpcMain.ipc = ipc;
    IpcMain.ipc.on('greet', IpcMain.greet);
    IpcMain.ipc.on('sync-msg', IpcMain.syncMsg);


  }
}