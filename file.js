const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
console.log(dirPath);
// for(i=0;i<5;i++){
// fs.writeFileSync(`${dirPath}/data${i}.txt`,'Hello world shukla!'); //this statement is used for create dynamic file with loop in the directory
// }


// Below statement is used for show list of file from directory
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
console.log(`File name is ${item}`);
    });
});