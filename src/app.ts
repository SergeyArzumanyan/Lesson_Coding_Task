const fs = require('fs');
const path = require('path');

function printFolderContents(passedPath: string, indent: number = 0): void {
    const directoryPath: string = path.resolve(passedPath);

    fs.readdirSync(directoryPath)
        .forEach((file: string) => {
            const filePath = path.join(directoryPath, file);
            const isDirectory: boolean = fs.lstatSync(filePath).isDirectory();
            const icon: string = isDirectory ? '📁' : '📄';
            console.log(`${' '.repeat(indent)} ${icon}`, file);

            if (isDirectory) {
                printFolderContents(filePath, indent + 2);
            }
        });
}

printFolderContents('node_modules');