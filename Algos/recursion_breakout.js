function recFun(x = 0){
    x += 1;
    if(x == 10){
        return `closing function call number ${x}`;
    }
    console.log(x);
    console.log(recFun(x));
    return `closing function call number ${x}`
}
// console.log(recFun());

function nrFib(num){
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }

    let nm2 = 0;
    let nm1 = 1;
    let n = 1;
    
    for(let i = 2; i <= num; i++) {
        n = nm2 + nm1;
        nm2 = nm1; 
        nm1 = n;
    }
    return n;
}


function rFib(num){
    if(num == 1){
        return 0;
    } 
    if(num == 2){
        return 1;
    }

    return rFib(num-1) + rFib(num-2);
}

// challenge: write a function that recursively finds a number's factorial
function factorial(num){
    
}