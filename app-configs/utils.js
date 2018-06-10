const url = require('path')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const OPTIONS = {
    devURL: 'http://localhost:3000',
    buildURL: url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true,
    }),
    reactDevToolsPath:
        'C:\\Users\\38050\\AppData\\Roaming\\Opera Software\\Opera Stable\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.3_0',
}

exports.dev = isDev
exports.loadURL = isDev ? OPTIONS.devURL : OPTIONS.buildURL
exports.REACT_DEVELOPER_TOOLS_PATH = OPTIONS.reactDevToolsPath
exports.ICON_PATH = path.join(__dirname, 'icon.png')
