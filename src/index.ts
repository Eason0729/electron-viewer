import { app, BrowserWindow, dialog } from "electron";
const serve = require("electron-serve");

import log from "electron-log";
if (require("electron-squirrel-startup")) app.quit();

let mainWindow: BrowserWindow;

const loadURL = serve({ directory: "dist/public" });

function createBrowserWindow() {
  const devEnv = /electron/.test(process.argv[0]);
  if (
    process.platform.startsWith("win") && !devEnv && process.argv.length >= 2
  ) {
    const filePath = process.argv[1];
    dialog.showMessageBox({
      title: "unsupported operation",
      message: "opening file with commandline arguments\nfile: " + filePath,
    });
    log.warn("opening file with commandline arguments");
  }
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
    },
    show: false,
  });

  mainWindow.setMenuBarVisibility(false);

  loadURL(mainWindow).then(() => {
    log.info("serving static content");
  }, (err: Error) => {
    log.error(err.message);
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
}

app.on("ready", createBrowserWindow);
