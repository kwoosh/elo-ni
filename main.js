const { app, BrowserWindow } = require('electron')
const { REACT_DEVELOPER_TOOLS, LOAD_URL } = require('./config')

const isDevelopment = process.argv.slice(2).includes('--dev')
process.env.NODE_ENV = isDevelopment ? 'development' : 'production'

app.on('ready', () => {
    let mainWindow = new BrowserWindow()

    mainWindow.loadURL(isDevelopment ? LOAD_URL.dev : LOAD_URL.build)

    mainWindow.on('closed', () => {
        mainWindow = null
        app.quit()
    })

    if (isDevelopment) BrowserWindow.addDevToolsExtension(REACT_DEVELOPER_TOOLS)
})
