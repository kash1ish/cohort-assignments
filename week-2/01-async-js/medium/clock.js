function clock(){
    let time = new Date();

    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    if(hours<12){
        console.log(`${hours}:${min}:${sec} AM`);
    }
    else{
        console.log(`${hours}:${min}:${sec} PM`);

    }
}
setInterval(clock,1000);