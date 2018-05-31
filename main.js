const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('path')

const isDev = process.env.NODE_ENV === 'development'
const loadURL = isDev
    ? 'http://localhost:3000'
    : url.format({
          pathname: path.join(__dirname, 'build/index.html'),
          protocol: 'file:',
          slashes: true,
      })

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
    })

    mainWindow.loadURL(loadURL)

    mainWindow.on('closed', () => {
        mainWindow = null
        app.quit()
    })

    if (isDev) BrowserWindow.addDevToolsExtension(REACT_DEVELOPER_TOOLS_PATH)
})

const REACT_DEVELOPER_TOOLS_PATH =
    'C:\\Users\\38050\\AppData\\Roaming\\Opera Software\\Opera Stable\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.3_0'
