'use strict';


let getInputArray_1 =() => {
    return document.getElementById("array_1").value;
};

let resultArray_1 =() => {
    let num = getInputArray_1();
    return document.getElementById("resultArray_1").innerHTML = array_1(num);
};

let array_2 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let max = newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        if (max < newArr[i]) {
            max = newArr[i];
        }
    }
    return(max);
};

let getInputArray_2 =() => {
    return document.getElementById("array_2").value;
};

let resultArray_2 =() => {
    let num = getInputArray_2();
    return document.getElementById("resultArray_2").innerHTML = array_2(num);
};


let array_3 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let min = newArr[0];
    let min_index = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (min > newArr[i]) {
            min = newArr[i];
            min_index = i;
        }
    }
    return(min_index);
};

let getInputArray_3 =() => {
    return document.getElementById("array_3").value;
};

let resultArray_3 =() => {
    let num = getInputArray_3();
    return document.getElementById("resultArray_3").innerHTML = array_3(num);
};


let array_4 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let max = newArr[0];
    let max_index = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (max < newArr[i]) {
            max = newArr[i];
            max_index = i;
        }
    }
    return(max_index);
};

let getInputArray_4 =() => {
    return document.getElementById("array_4").value;
};

let resultArray_4 =() => {
    let num = getInputArray_4();
    return document.getElementById("resultArray_4").innerHTML = array_4(num);
};

let array_5 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 !== 0) {
            sum += newArr[i];
        }
    }
    return(sum);
};

let getInputArray_5 =() => {
    return document.getElementById("array_5").value;
};

let resultArray_5 =() => {
    let num = getInputArray_5();
    return document.getElementById("resultArray_5").innerHTML = array_5(num);
};


let array_6 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let arr_reverse = newArr.reverse();
    return(arr_reverse);
};

let getInputArray_6 =() => {
    return document.getElementById("array_6").value;
};

let resultArray_6 =() => {
    let num = getInputArray_6();
    return document.getElementById("resultArray_6").innerHTML = array_6(num);
};


let array_7 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] % 2 !== 0) {
            count++;
        }
    }
    return(count);
};

let getInputArray_7 =() => {
    return document.getElementById("array_7").value;
};

let resultArray_7 =() => {
    let num = getInputArray_7();
    return document.getElementById("resultArray_7").innerHTML = array_7(num);
};


let array_8 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let arr_1 = [];
    let arr_2 = [];
    for (let i = 0; i < newArr.length / 2; i++) {
        if (newArr[i] !== ' '){
            arr_1.push(newArr[i]);
            arr_2.push(newArr[i + newArr.length / 2]);
        }
    }
    return(arr_2.concat(arr_1));
};

let getInputArray_8 =() => {
    return document.getElementById("array_8").value;
};

let resultArray_8 =() => {
    let num = getInputArray_8();
    return document.getElementById("resultArray_8").innerHTML = array_8(num);
};


let array_9 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    for (let i = newArr.length - 1; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            if (newArr[k] > newArr[k+1]) {
                let temp = newArr[k];
                newArr[k] = newArr[k+1];
                newArr[k+1] = temp;
            }
        }
    }
    return(newArr);
};

let getInputArray_9 =() => {
    return document.getElementById("array_9").value;
};

let resultArray_9 =() => {
    let num = getInputArray_9();
    return document.getElementById("resultArray_9").innerHTML = array_9(num);
};