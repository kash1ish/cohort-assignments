/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    let p1 = wait1(t1);
    let p2 = wait2(t2);
    let p3 = wait3(t3);

    const start = performance.now();
    return Promise.all([p1,p2,p3]).then((values)=>{
        const end = performance.now();
        const time = end - start;
        return time;
    })
}

module.exports = calculateTime;
