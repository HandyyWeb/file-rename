import fs from 'fs';

export const renameBasic = (filePath, newName) => {
  fs.rename(filePath, newName, (err) => {
    if (err) {
      console.log(`Bad value !`);
    } else {
      console.log('Rename successfull ! ');
    }
  });
};

export const renameFast = (filePath, newName) => {
  fs.rename(filePath, newName, (err) => {
    if (err) {
      console.log(`Bad value !`);
    } else {
      console.log('Rename successfull ! ');
    }
  });
};
