const fs=require('fs');
const path=require('path');
const filePath=path.join(__dirname,'files');
const fileAbsolutePath=`${filePath}/data2.txt`
console.log(fileAbsolutePath);

//Read data from file

// fs.readFile(fileAbsolutePath,'utf8',(err,item)=>{
//     console.log(item);
//  });

//Append data into the file

// fs.appendFile(fileAbsolutePath," Hi, I am in Mumbai!",(err)=>{
//     console.log('Data appended in file!');
// });

//Rename file name

// fs.rename(fileAbsolutePath,`${filePath}/data2.txt`,(err)=>{
//     if(!err)
//     console.log('File name is updated!');
// });

//Delete file from the particular directory
fs.unlinkSync(fileAbsolutePath);
console.log('File deleted!');
