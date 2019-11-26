const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require('electron-is-dev');

let win;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});

    win.loadURL(
        isDev ? `http://localhost:3000` : `file://${__dirname}/index.html`
    );

    // win.loadURL(
    //     isDev ? 'http://localhost:3000' : 'file://index.html'
    // );

    // win.webContents.openDevTools();

    win.on('close', function() {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    app.quit();
});

app.on('activate', function() {
    if(win == null){
        createWindow();
    }
})

