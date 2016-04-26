'use strict';

const fs = require('fs');
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function ()
{
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function ()
{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 640,
        'minWidth': 800,
        'minHeight': 600
    });

    mainWindow.setMenu(null);

    if (process.env.NODE_ENV === 'dev') {
        mainWindow.loadURL('file://' + __dirname + '/build/dev.html');
    } else {
        mainWindow.loadURL('file://' + __dirname + '/build/index.html');
    }

    if (process.env.NODE_ENV === 'dev') {
        // Add DevTools Extension
        BrowserWindow.removeDevToolsExtension('RemoteDev DevTools');
        BrowserWindow.addDevToolsExtension('node_modules/remotedev-extension/dist');
        mainWindow.openDevTools();
    }

    mainWindow.on('closed', function ()
    {
        mainWindow = null;
    });
});
