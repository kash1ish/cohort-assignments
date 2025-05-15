const { log } = require('console');
const fs = require('fs');
const path = require('path');
console.log("Reading from file");
const filePath = "C:\\Users\\Kashish\\OneDrive\\Desktop\\cohort-assignments\\week-2\\01-async-js\\easy\\file.txt";

fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

    
function calcSum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
    sum = sum + i ;
}
console.log("sum done");
}
calcSum(100000000);
console.log("everything done");
