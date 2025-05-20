const fs = require('fs');
const filePath = 'C:\\Users\\Kashish\\OneDrive\\Desktop\\cohort-assignments\\week-2\\01-async-js\\medium\\a.txt';

fs.readFile(filePath,'utf-8',(err,data)=>{
    let r = data.toString();
    r = data.replace(/\s+/g,'').trim();
    fs.writeFile(filePath,r,(err)=>{
        if(err){
            throw new Error;
        }
    })
})