'use strict';

let getInputCond_1 =() => {
    let userString1 = document.getElementById("cond_1_1").value;
    let userString2 = document.getElementById("cond_1_2").value;
    let arr = [];
    arr.push(userString1);
    arr.push(userString2);
    return arr;
};

let resultCond_1 =() => {
    let arr = getInputCond_1();
    return document.getElementById("resultCond_1").innerHTML = cond_1(arr);
};



let cond_2 = (arr) => {
    if (arr[0] > 0 && arr[1] > 0) {
        return("Первая четверть");
    }else if (arr[0] < 0 && arr[1] > 0) {
        return("Вторая четверть");
    }else if (arr[0] < 0 && arr[1] < 0) {
        return("Третья четверть");
    }else if (arr[0] > 0 && arr[1] < 0) {
        return("Четвертая четверть");
    }else if (arr[0] === 0 && arr[1] === 0){
        return("Центр, точка (0,0)");
    }else{
        return("Точка на оси");
    }
};

let getInputCond_2 =() => {
    let userString1 = document.getElementById("cond_2_1").value;
    let userString2 = document.getElementById("cond_2_2").value;
    let arr = [];
    arr.push(userString1);
    arr.push(userString2);
    return arr;
};

let resultCond_2 =() => {
    let arr = getInputCond_2();
    return document.getElementById("resultCond_2").innerHTML = cond_2(arr);
};

let cond_4 = (arr) => {
    let sum = 0;
    if (arr[0] > 0) {
        sum += +arr[0];
    }
    if (arr[1] > 0) {
        sum += +arr[1];
    }
    if (arr[2] > 0) {
        sum += +arr[2];
    }
    return(sum);
};

let getInputCond_4 =() => {
    let userString1 = document.getElementById("cond_4_1").value;
    let userString2 = document.getElementById("cond_4_2").value;
    let userString3 = document.getElementById("cond_4_3").value;
    let arr = [];
    arr.push(userString1);
    arr.push(userString2);
    arr.push(userString3);
    return arr;
};

let resultCond_4 =() => {
    let arr = getInputCond_4();
    return document.getElementById("resultCond_4").innerHTML = cond_4(arr);
};


let cond_5 = (num) => {
    if (num >= 0 && num <= 19) {
        return("Оценка F");
    }else if (num >= 20 && num <= 39) {
        return("Оценка E");
    }else if (num >= 40 && num <= 59) {
        return("Оценка D");
    }else if (num >= 60 && num <= 74) {
        return("Оценка C");
    }else if (num >= 75 && num <= 89) {
        return("Оценка B");
    }else if (num >= 90 && num <= 100) {
        return("Оценка A");
    }else{
        return("Нет такого рейтинга");
    }
};

let getInputCond_5 =() => {
    return document.getElementById("cond_5").value;
};

let resultCond_5 =() => {
    let num = getInputCond_5();
    return document.getElementById("resultCond_5").innerHTML = cond_5(num);
};