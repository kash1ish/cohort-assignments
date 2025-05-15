function createCounter(){
    let count = 0;
    setInterval(()=>{
        count++;
        console.log(count);
    },1000);
}
//createCounter();

//without setInterval
 let count = 0;
function createCounter2(){
    count++;
    console.log(count);
    setTimeout(createCounter2,1000);
}
createCounter2();