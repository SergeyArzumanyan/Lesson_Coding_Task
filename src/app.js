var fs = require('fs');
var path = require('path');
function printFolderContents(passedPath, indent) {
    if (indent === void 0) { indent = 0; }
    var absolutePath = path.resolve(passedPath);
    console.log('absolutePath ---', absolutePath);
    fs.readdirSync(absolutePath)
        .forEach(function (file) {
        var filePath = path.join(absolutePath, file);
        console.log('filePath ---', filePath);
        var isDirectory = fs.lstatSync(filePath).isDirectory();
        var icon = isDirectory ? '📁' : '📄';
        // console.log(`${' '.repeat(indent)} ${icon}`, file);
        if (isDirectory) {
            printFolderContents(filePath, indent + 2);
        }
    });
}
var folderPath = 'node_modules';
printFolderContents(folderPath);
