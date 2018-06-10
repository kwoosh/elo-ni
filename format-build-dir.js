const fs = require('fs-extra')
const path = require('path')

const buildPath = './build'
const filesToExclude = ['index.html', 'static']

fs.ensureDir(buildPath).then(() => {
    fs.readdir(buildPath).then(files => {
        files.forEach(file => {
            if (!filesToExclude.includes(file))
                fs.remove(`${buildPath}/${file}`).then(() => {
                    console.log(`[[${file}]] successfuly deleted from ./build`)
                })
        })
    })
})

/**
 * v0.1
 *  this script is running after building react sources
 */
