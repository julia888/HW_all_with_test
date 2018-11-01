'use strict';
let loop_1 = (num) => {
    let sum = 0;
    let count = 0;
    num = +num;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return("Сумма = " + sum + ", количество = " + count);
};

let getInputLoop_1 =() => {
    return document.getElementById("loop_1").value;
};

let resultLoop_1 =() => {
    let num = getInputLoop_1();
    return document.getElementById("resultLoop_1").innerHTML = loop_1(num);
};




let getInputLoop_2 =() => {
    return document.getElementById("loop_2").value;
};

let resultLoop_2 =() => {
    let num = getInputLoop_2();
    return document.getElementById("resultLoop_2").innerHTML = loop_2(num);
};


let loop_3 = (number) => {
    number = +number;
    let sqrt;
    if (number > 0 && Number.isInteger(number)) {
        for (let i = 1; i*i <= number; i++) {
            sqrt = i;
        }
        return(sqrt);
    }else{
        return("Ненатуральное число");
    }
};

let getInputLoop_3 =() => {
    return document.getElementById("loop_3").value;
};

let resultLoop_3 =() => {
    let num = getInputLoop_3();
    return document.getElementById("resultLoop_3").innerHTML = loop_3(num);
};


let loop_4 = (num) => {
    num = +num;
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return(fact);
};

let getInputLoop_4 =() => {
    return document.getElementById("loop_4").value;
};

let resultLoop_4 =() => {
    let num = getInputLoop_4();
    return document.getElementById("resultLoop_4").innerHTML = loop_4(num);
};


let loop_5 = (num) => {
    let sum = 0;
    let nmb = String(num).split("");

    for (let i = 0; i < nmb.length; i++) {
        sum += +nmb[i]; //преобразуем в число и ищем сумму
    }
    return(sum);
};

let getInputLoop_5 =() => {
    return document.getElementById("loop_5").value;
};

let resultLoop_5 =() => {
    let num = getInputLoop_5();
    return document.getElementById("resultLoop_5").innerHTML = loop_5(num);
};


let loop_6 = (num) => {
    let number_revers = "";
    for (let i = num.length; i >= 0; i--) {
        number_revers += num.charAt(i);
    }
    return(number_revers);
};

let getInputLoop_6 =() => {
    return document.getElementById("loop_6").value;
};

let resultLoop_6 =() => {
    let num = getInputLoop_6();
    return document.getElementById("resultLoop_6").innerHTML = loop_6(num);
};