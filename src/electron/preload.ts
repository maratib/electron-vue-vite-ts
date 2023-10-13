// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from "electron";
import { SomeObj, Versions } from "./preloaded/pre-types";


export default class Preload {

  static ctx: typeof contextBridge;

  private static onLoaded() {
    Preload.ctx.exposeInMainWorld("versions", Versions);
    Preload.ctx.exposeInMainWorld("someObj", SomeObj);
  }


  static main(context: typeof contextBridge) {
    Preload.ctx = context;
    process.once("loaded", Preload.onLoaded)
  }
}

Preload.main(contextBridge);

