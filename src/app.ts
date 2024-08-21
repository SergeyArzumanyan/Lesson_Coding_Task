const fs = require('fs');

function printFolderContents(passedPath: string, indent: number = 0): void {
    fs.readdirSync(passedPath)
        .forEach((file: File) => {
            const isDirectory: boolean = fs.lstatSync(`${ passedPath }/` + file.toString()).isDirectory();
            const icon: string = isDirectory ? '📁' : '📄';
            console.log(`${ ' '.repeat(indent) } ${ icon }`, file);

            if (isDirectory) {
                printFolderContents(`${ passedPath }/` + file.toString(), indent + 2);
            }
            return;
        });
}

printFolderContents('node_modules');
