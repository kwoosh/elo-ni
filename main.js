const { app, BrowserWindow } = require('electron')
const { ICON_PATH, REACT_DEVELOPER_TOOLS_PATH, dev, loadURL } = require('./app-configs/utils')

let mainWindow

app.on('ready', () => {
    const defaultWidth = 460
    const defaultHeight = 650

    const windowOptions = {
        width: !dev ? defaultWidth : defaultWidth + 1000,
        height: defaultHeight,
        icon: ICON_PATH,
        // frame: false,
    }

    if (!dev) {
        windowOptions.minHeight = defaultHeight
        windowOptions.maxHeight = defaultHeight
        windowOptions.minWidth = defaultWidth
        windowOptions.maxWidth = defaultWidth
    }

    mainWindow = new BrowserWindow(windowOptions)

    mainWindow.loadURL(loadURL)
    mainWindow.on('closed', () => {
        mainWindow = null
        app.quit()
    })

    if (dev) {
        BrowserWindow.addDevToolsExtension(REACT_DEVELOPER_TOOLS_PATH)
        mainWindow.webContents.openDevTools({ mode: 'right' })
    }

    if (!dev) {
        // BrowserWindow.
    }
})

app.on('before-quit', () => {
    mainWindow.webContents.send('before-quit')
})
