var fs = require('fs');
function printFolderContents(passedPath, indent) {
    if (indent === void 0) { indent = 0; }
    fs.readdirSync(passedPath)
        .forEach(function (file) {
        var isDirectory = fs.lstatSync("".concat(passedPath, "/") + file.toString()).isDirectory();
        var icon = isDirectory ? '📁' : '📄';
        console.log("".concat(' '.repeat(indent), " ").concat(icon), file);
        if (isDirectory) {
            printFolderContents("".concat(passedPath, "/") + file.toString(), indent + 2);
        }
        return;
    });
}
printFolderContents('node_modules');
