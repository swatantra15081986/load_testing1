const fs = require('fs');
const path = require('path');

const folder_path = 'C:/Users/SwatantraKSrivastava/OneDrive - Advatix/Desktop/automation_poc/advatix_web_automation/3pl_cypress/cypress/downloads';
const file_extension = '.csv'; // Change this to your desired extension

// Read the contents of the folder
fs.readdir(folder_path, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Filter filenames by the desired extension
    const files_with_desired_extension = files.filter(file => path.extname(file) === file_extension);

    // If there are files with the desired extension
    if (files_with_desired_extension.length > 0) {
        // Get the first filename with the desired extension
        const first_file_name = files_with_desired_extension[0];
        console.log('First filename with extension', file_extension, ':', first_file_name);
    } else {
        console.log('No files found with extension', file_extension, 'in folder', folder_path);
    }
});
