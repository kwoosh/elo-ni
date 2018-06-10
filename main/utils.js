const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const OPTIONS = {
    windowSizes: { width: 460, height: 650 },
    iconPath: path.join(__dirname, 'icon.png'),
    devURL: 'http://localhost:3000',
    buildURL: `file://${path.join(__dirname, '/../build/index.html')}`,
    reactDevToolsPath:
        'C:\\Users\\38050\\AppData\\Roaming\\Opera Software\\Opera Stable\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.3_0',
}

exports.dev = isDev
exports.loadURL = isDev ? OPTIONS.devURL : OPTIONS.buildURL
exports.REACT_DEVELOPER_TOOLS_PATH = OPTIONS.reactDevToolsPath
exports.ICON_PATH = OPTIONS.iconPath
exports.windowSizes = OPTIONS.WINDOW_SIZE
