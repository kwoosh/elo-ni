const url = require('url')
const path = require('path')

module.exports = {
    LOAD_URL: {
        dev: 'http://localhost:3000',
        build: url.format({
            pathname: path.join(__dirname, 'build/index.html'),
            protocol: 'file:',
            slashes: true,
        }),
    },

    REACT_DEVELOPER_TOOLS:
        'C:\\Users\\38050\\AppData\\Roaming\\Opera Software\\Opera Stable\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.1_0',
}
