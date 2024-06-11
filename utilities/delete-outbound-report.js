const fs = require('fs');
const path = require('path');

const folderPath = 'acs-2/outbound/outbound_report';

// Function to delete folder recursively
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
    console.log(`Folder ${folderPath} deleted successfully.`);
  } else {
    console.log(`Folder ${folderPath} does not exist.`);
  }
}

deleteFolderRecursive(folderPath);
