const { app, BrowserWindow, Tray, Menu, MenuItem } = require('electron')
const { ICON_PATH, REACT_DEVELOPER_TOOLS_PATH, dev, loadURL, defaultWindowOptions } = require('./app-configs/utils')

let win = null
let tray = null

app.on('ready', () => {
    tray = new Tray(ICON_PATH)
    win = new BrowserWindow({
        ...defaultWindowOptions,
        icon: ICON_PATH,
        frame: false,
    })

    // win.setSkipTaskbar(true)

    const trayContextMenu = Menu.buildFromTemplate([
        new MenuItem({
            label: 'About elo-ni',
            click() {
                console.log('about')
            },
        }),
        new MenuItem({ type: 'separator' }),
        new MenuItem({ label: 'Quit app', role: 'quit' }),
    ])

    tray.on('double-click', () => {
        win.isVisible() ? win.hide() : win.show()
    })

    tray.setContextMenu(trayContextMenu)
    tray.setToolTip('Click to hide/show')
    // tray.setHighlightMode('always')

    win.loadURL(loadURL)
    win.on('closed', () => {
        win = null
        app.quit()
    })

    if (dev) {
        BrowserWindow.addDevToolsExtension(REACT_DEVELOPER_TOOLS_PATH)
        win.webContents.openDevTools({ mode: 'right' })
    }
})

app.on('before-quit', () => {
    win.webContents.send('before-quit')
    tray.destroy()
    tray = null
})
