'use strict';

let getInputFunc_1 =() => {
    return document.getElementById("func_1").value;
};

let resultFunc_1 =() => {
    let num = getInputFunc_1();
    return document.getElementById("resultFunc_1").innerHTML = func_1(num);
};


let func_2 = (num) => {
    let str = '';
    let arrNum = num.toString().split('');
    let arrNumRes = [];
    for (let i = 0; i < arrNum.length; i++) {
        arrNumRes.push(arrNum[i]);
    }
    if (arrNum.length === 3) {
        if (arrNumRes[1] === '1') {
            str = (hundredsN(arrNumRes[0]) + " "+ teensN(arrNumRes[2]));
        }else{
            str = (hundredsN(arrNumRes[0]) + " "+ decadesN(arrNumRes[1]) + " " + unitsN(arrNumRes[2]));
        }
    }else if (arrNum.length === 2) {
        if (arrNumRes[0] === '1') {
            str = (teensN(arrNumRes[1]));
        }else{
            str = (decadesN(arrNumRes[0]) + " " + unitsN(arrNumRes[1]));
        }
    }else if (arrNum.length === 1) {
        if (arrNumRes[0] === '0') {
            str = "ноль";
        }else{
            str = (unitsN(arrNumRes[0]));
        }
    }else{
        str = "Что-то пошло не так!";
    }
    return str;
};
function hundredsN(num) {
    switch(num){
        case '1':
            return "сто";
        case '2':
            return "двести";
        case '3':
            return "триста";
        case '4':
            return "четыреста";
        case '5':
            return "пятьсот";
        case '6':
            return "шестьсот";
        case '7':
            return "семьсот";
        case '8':
            return "восемьсот";
        case '9':
            return "девятьсот";
        default:
            return "Что-то пошло не так";
    }
}
function decadesN(num) {
    switch(num){
        case '0':
            return "";
        case '1':
            return "десять";
        case '2':
            return "двадцать";
        case '3':
            return "тридцать";
        case '4':
            return "сорок";
        case '5':
            return "пятьдесят";
        case '6':
            return "шестьдесят";
        case '7':
            return "семьдесят";
        case '8':
            return "восемьдесят";
        case '9':
            return "девяносто";
        default:
            return "Что-то пошло не так";
    }
}
function unitsN(num, fem) {
    switch(num){
        case '0':
            return "";
        case '1':
            return fem ? "одна" : "один";
        case '2':
            return fem ? "две" : "два";
        case '3':
            return "три";
        case '4':
            return "четыре";
        case '5':
            return "пять";
        case '6':
            return "шесть";
        case '7':
            return "семь";
        case '8':
            return "восемь";
        case '9':
            return "девять";
        default:
            return "Что-то пошло не так";
    }
}
function teensN(num) {
    let str = '';
    switch(num){
        case '1':
            str = "один";
            break;
        case '2':
            str = "две";
            break;
        case '3':
            str = "три";
            break;
        case '4':
            str = "четыр";
            break;
        case '5':
            str = "пят";
            break;
        case '6':
            str = "шест";
            break;
        case '7':
            str = "сем";
            break;
        case '8':
            str = "восем";
            break;
        case '9':
            str = "девят";
            break;
        default:
            str = "Что-то пошло не так";
    }
    return str + "надцать";
}

let getInputFunc_2 =() => {
    return document.getElementById("func_2").value;
};

let resultFunc_2 =() => {
    let num = getInputFunc_2();
    return document.getElementById("resultFunc_2").innerHTML = func_2(num);
};


let func_3 = (str) => {
    let num = [];
    let arrStr = str.split(' ');
    for (let i = 0; i < arrStr.length; i++) {
        let u = units(arrStr[i]);
        let t = teens(arrStr[i]);
        let d = decades(arrStr[i]);
        let h = hundreds(arrStr[i]);
        if (u !== "") {
            num.push(u);
        }else if (t !== "") {
            num.push(t);
        }else if (d !== "") {
            if (arrStr.length === 1) {
                d = d + "0";
                num.push(d);
            }else{
                num.push(d);
            }
        }else if(h !== ""){
            if (arrStr.length === 1) {
                h = h + "00";
                num.push(h);
            }else if (arrStr.length === 2) {
                h = h + '0' + u;
                num.push(h);
            }else if (arrStr.length === 3) {
                h = h + d + u;
                num.push(h);
            }
        }
    }
    if (num.length === 1) {
        return(num[0]);
    }else if (num.length === 2) {
        return(num[0].concat(num[1]));
    }else{
        return(num[0].concat(num[1]).concat(num[2]));
    }
    function hundreds(num) {
        switch(num){
            case 'сто':
                return "1";
            case 'двести':
                return "2";
            case 'триста':
                return "3";
            case 'четыреста':
                return "4";
            case 'пятьсот':
                return "5";
            case 'шестьсот':
                return "6";
            case 'семьсот':
                return "7";
            case 'восемьсот':
                return "8";
            case 'девятьсот':
                return "9";
            default:
                return "";
        }
    }
    function decades(num) {
        switch(num){
            case 'двадцать':
                return "2";
            case 'тридцать':
                return "3";
            case 'сорок':
                return "4";
            case 'пятьдесят':
                return "5";
            case 'шестьдесят':
                return "6";
            case 'семьдесят':
                return "7";
            case 'восемьдесят':
                return "8";
            case 'девяносто':
                return "9";
            default:
                return "";
        }
    }
    function units(num) {
        switch(num){
            case '0':
                return "";
            case 'одна':
                return "1";
            case 'один':
                return "1";
            case 'две':
                return "2";
            case 'два':
                return "2";
            case 'три':
                return "3";
            case 'четыре':
                return "4";
            case 'пять':
                return "5";
            case 'шесть':
                return "6";
            case 'семь':
                return "7";
            case 'восемь':
                return "8";
            case 'девять':
                return "9";
            default:
                return "";
        }
    }
    function teens(str) {
        switch(str){
            case 'десять':
                return "10";
            case 'одиннадцать':
                return"11";
            case 'двенадцать':
                return "12";
            case 'тринадцать':
                return "13";
            case 'четырнадцать':
                return "14";
            case 'пятнадцать':
                return"15";
            case 'шестнадцать':
                return "16";
            case 'семнадцать':
                return "17";
            case 'восемнадцать':
                return "18";
            case 'девятнадцать':
                return "19";
            default:
                return "";
        }
    }
};

let getInputFunc_3 =() => {
    return document.getElementById("func_3").value;
};

let resultFunc_3 =() => {
    let num = getInputFunc_3();
    return document.getElementById("resultFunc_3").innerHTML = func_3(num);
};


let func_4 = (arr) => {
    let A = Math.pow((arr[2] - arr[0]), 2);
    let B = Math.pow((arr[3] - arr[1]), 2);
    return Math.sqrt(A + B);
};

let getInputFunc_4 =() => {
    let userString1 = document.getElementById("func_4_1").value;
    let userString2 = document.getElementById("func_4_2").value;
    let userString3 = document.getElementById("func_4_3").value;
    let userString4 = document.getElementById("func_4_4").value;
    let arr = [];
    arr.push(userString1);
    arr.push(userString2);
    arr.push(userString3);
    arr.push(userString4);
    return arr;
};

let resultFunc_4 =() => {
    let arr = getInputFunc_4();
    return document.getElementById("resultFunc_4").innerHTML = func_4(arr);
};


let func_5 = (num) => {
    let str = '';
    let arrNum = num.toString().split('');
    let arrNumRes = [];
    for (let i = 0; i < arrNum.length; i++) {
        arrNumRes.push(arrNum[i]);
    }
    if (arrNum.length === 12) {//100 000 000
        if (arrNumRes[1] === '1') {
            str = hundreds(arrNumRes[0]) + " "+ teens(arrNumRes[2]) + " миллиардов ";
        }else{
            str = hundreds(arrNumRes[0]) + " "+ decades(arrNumRes[1]) + " " + units(arrNumRes[2]) + " " + billion(arrNumRes[2]) + " ";
        }
        if (arrNumRes[4] === '1') {
            str += hundreds(arrNumRes[3]) + " "+ teens(arrNumRes[5]) + " миллионов ";
        }else{
            str += hundreds(arrNumRes[3]) + " "+ decades(arrNumRes[4]) + " " + units(arrNumRes[5]) + " " + million(arrNumRes[5]) +" ";
        }
        if (arrNumRes[7] === '1') {
            str += hundreds(arrNumRes[6]) + " "+ teens(arrNumRes[8]) + " тысяч ";
            if (arrNumRes[10] === "1") {
                str += hundreds(arrNumRes[9]) + " "+ teens(arrNumRes[11]);
            }else{
                str +=  hundreds(arrNumRes[9]) + " "+ decades(arrNumRes[10]) + " " + units(arrNumRes[11]);
            }
        }else{
            str += hundreds(arrNumRes[6]) + " "+ decades(arrNumRes[7]) + " " + units(arrNumRes[8], true) + " " + thousand(arrNumRes[8]) + " ";
            if (arrNumRes[10] === '1') {
                str = str + hundreds(arrNumRes[9]) + " "+ teens(arrNumRes[9]);
            }else{
                str = str + hundreds(arrNumRes[9]) + " "+ decades(arrNumRes[10]) + " " + units(arrNumRes[11]);
            }
        }
    }else if (arrNum.length === 11) {//10 000 000
        if (arrNumRes[0] === '1') {
            str = teens(arrNumRes[1]) + " миллиардов ";
        }else{
            str = decades(arrNumRes[0]) + " " + units(arrNumRes[1]) + " " + billion(arrNumRes[1]) + " ";
        }
        if (arrNumRes[3] === '1') {
            str += hundreds(arrNumRes[2]) + " "+ teens(arrNumRes[4]) + " миллионов ";
        }else{
            str += hundreds(arrNumRes[2]) + " "+ decades(arrNumRes[3]) + " " + units(arrNumRes[4]) + " " + million(arrNumRes[4]) +" ";
        }
        if (arrNumRes[6] === '1') {
            str += hundreds(arrNumRes[5]) + " "+ teens(arrNumRes[7]) + " тысяч ";
            if (arrNumRes[9] === "1") {
                str += hundreds(arrNumRes[8]) + " "+ teens(arrNumRes[10]);
            }else{
                str +=  hundreds(arrNumRes[8]) + " "+ decades(arrNumRes[9]) + " " + units(arrNumRes[10]);
            }
        }else{
            str += hundreds(arrNumRes[5]) + " "+ decades(arrNumRes[6]) + " " + units(arrNumRes[7], true) + " " + thousand(arrNumRes[7]) + " ";
            if (arrNumRes[9] === '1') {
                str = str + hundreds(arrNumRes[8]) + " "+ teens(arrNumRes[8]);
            }else{
                str = str + hundreds(arrNumRes[8]) + " "+ decades(arrNumRes[9]) + " " + units(arrNumRes[10]);
            }
        }
    }else if (arrNum.length === 10) {//1 000 000 000
        str = units(arrNumRes[0]) + " " + billion(arrNumRes[0]) + " ";
        if (arrNumRes[2] === '1') {
            str += hundreds(arrNumRes[1]) + " "+ teens(arrNumRes[3]) + " миллионов ";
        }else{
            str += hundreds(arrNumRes[1]) + " "+ decades(arrNumRes[2]) + " " + units(arrNumRes[3]) + " " + million(arrNumRes[3]) +" ";
        }
        if (arrNumRes[5] === '1') {
            str += hundreds(arrNumRes[4]) + " "+ teens(arrNumRes[6]) + " тысяч ";
            if (arrNumRes[8] === "1") {
                str += hundreds(arrNumRes[7]) + " "+ teens(arrNumRes[9]);
            }else{
                str +=  hundreds(arrNumRes[7]) + " "+ decades(arrNumRes[8]) + " " + units(arrNumRes[9]);
            }
        }else{
            str += hundreds(arrNumRes[4]) + " "+ decades(arrNumRes[5]) + " " + units(arrNumRes[6], true) + " " + thousand(arrNumRes[6]) + " ";
            if (arrNumRes[8] === '1') {
                str = str + hundreds(arrNumRes[7]) + " "+ teens(arrNumRes[7]);
            }else{
                str = str + hundreds(arrNumRes[7]) + " "+ decades(arrNumRes[8]) + " " + units(arrNumRes[9]);
            }
        }
    }else if (arrNum.length === 9) {//100 000 000
        if (arrNumRes[1] === '1') {
            str = hundreds(arrNumRes[0]) + " "+ teens(arrNumRes[2]) + " миллионов ";
        }else{
            str = hundreds(arrNumRes[0]) + " "+ decades(arrNumRes[1]) + " " + units(arrNumRes[2]) + " " + million(arrNumRes[2]) +" ";
        }
        if (arrNumRes[4] === '1') {
            str += hundreds(arrNumRes[3]) + " "+ teens(arrNumRes[5]) + " тысяч ";
            if (arrNumRes[7] === "1") {
                str += hundreds(arrNumRes[6]) + " "+ teens(arrNumRes[8]);
            }else{
                str +=  hundreds(arrNumRes[6]) + " "+ decades(arrNumRes[7]) + " " + units(arrNumRes[8]);
            }
        }else{
            str += hundreds(arrNumRes[3]) + " "+ decades(arrNumRes[4]) + " " + units(arrNumRes[5], true) + " " + thousand(arrNumRes[5]) + " ";
            if (arrNumRes[7] === '1') {
                str = str + hundreds(arrNumRes[6]) + " "+ teens(arrNumRes[6]);
            }else{
                str = str + hundreds(arrNumRes[6]) + " "+ decades(arrNumRes[7]) + " " + units(arrNumRes[8]);
            }
        }
    }else if (arrNum.length === 8) {//10 000 000
        if (arrNumRes[0] === '1') {
            str = teens(arrNumRes[1]) + " миллионов ";
        }else{
            str = decades(arrNumRes[0]) + " " + units(arrNumRes[1]) + " " + million(arrNumRes[1]) + " ";
        }
        if (arrNumRes[3] === '1') {
            str += hundreds(arrNumRes[2]) + " "+ teens(arrNumRes[4]) + " тысяч ";
            if (arrNumRes[6] === "1") {
                str += hundreds(arrNumRes[5]) + " "+ teens(arrNumRes[7]);
            }else{
                str +=  hundreds(arrNumRes[5]) + " "+ decades(arrNumRes[6]) + " " + units(arrNumRes[7]);
            }
        }else{
            str += hundreds(arrNumRes[2]) + " "+ decades(arrNumRes[3]) + " " + units(arrNumRes[4], true) + " " + thousand(arrNumRes[4]) + " ";
            if (arrNumRes[6] === '1') {
                str = str + hundreds(arrNumRes[5]) + " "+ teens(arrNumRes[5]);
            }else{
                str = str + hundreds(arrNumRes[5]) + " "+ decades(arrNumRes[6]) + " " + units(arrNumRes[7]);
            }
        }
    }else if (arrNum.length === 7) {//1 000 000
        str = units(arrNumRes[0]) + " " + million(arrNumRes[0]) + " ";
        if (arrNumRes[2] === '1') {
            str += hundreds(arrNumRes[1]) + " "+ teens(arrNumRes[3]) + " тысяч ";
            if (arrNumRes[5] === "1") {
                str += hundreds(arrNumRes[4]) + " "+ teens(arrNumRes[6]);
            }else{
                str +=  hundreds(arrNumRes[4]) + " "+ decades(arrNumRes[5]) + " " + units(arrNumRes[6]);
            }
        }else{
            str += hundreds(arrNumRes[1]) + " "+ decades(arrNumRes[2]) + " " + units(arrNumRes[3], true) + " " + thousand(arrNumRes[3]) + " ";
            if (arrNumRes[5] === '1') {
                str = str + hundreds(arrNumRes[4]) + " "+ teens(arrNumRes[4]);
            }else{
                str = str + hundreds(arrNumRes[4]) + " "+ decades(arrNumRes[5]) + " " + units(arrNumRes[6]);
            }
        }
    }else if (arrNum.length === 6) {//100 000
        if (arrNumRes[1] === '1') {
            str = hundreds(arrNumRes[0]) + " "+ teens(arrNumRes[2]) + " тысяч ";
            if (arrNumRes[4] === "1") {
                str += hundreds(arrNumRes[3]) + " "+ teens(arrNumRes[5]);
            }else{
                str +=  hundreds(arrNumRes[3]) + " "+ decades(arrNumRes[4]) + " " + units(arrNumRes[5]);
            }
        }else{
            str = hundreds(arrNumRes[0]) + " "+ decades(arrNumRes[1]) + " " + units(arrNumRes[2], true) + " " + thousand(arrNumRes[2]) + " ";

            if (arrNumRes[4] === '1') {
                str = str + hundreds(arrNumRes[3]) + " "+ teens(arrNumRes[5]);
            }else{
                str = str + hundreds(arrNumRes[3]) + " "+ decades(arrNumRes[4]) + " " + units(arrNumRes[5]);
            }
        }
    }else if (arrNum.length === 5) {//10 000
        if (arrNumRes[0] === '1') {
            str = teens(arrNumRes[1]) + " тысяч ";
            if (arrNumRes[3] === '1') {
                str = str + hundreds(arrNumRes[2]) + " "+ teens(arrNumRes[4]);
            }else{
                str = str + hundreds(arrNumRes[2]) + " "+ decades(arrNumRes[3]) + " " + units(arrNumRes[4]);
            }
        }else{
            if (arrNumRes[3] === '1' || "2") {
                str = decades(arrNumRes[0]) + " " + units(arrNumRes[1], true) + " "+ thousand(arrNumRes[1]) + " ";
            }else{
                str = decades(arrNumRes[0]) + " " + units(arrNumRes[1]) + " "+ thousand(arrNumRes[1]) + " ";
            }
            if (arrNumRes[3] === '1') {
                str = str + hundreds(arrNumRes[2]) + " "+ teens(arrNumRes[4]);
            }else{
                str = str + hundreds(arrNumRes[2]) + " "+ decades(arrNumRes[3]) + " " + units(arrNumRes[4]);
            }
        }
    }else if (arrNum.length === 4) {//1 000
        if (arrNumRes[2] === ('1')) {
            str = units(arrNumRes[0], true) + " " + thousand(arrNumRes[0]) + " " + hundreds(arrNumRes[1]) + " "+ teens(arrNumRes[2]);
        }else{
            if (arrNumRes[0] === ('1' || '2')) {
                str = units(arrNumRes[0], true) + " " + thousand(arrNumRes[0]) + " " + hundreds(arrNumRes[1]) + " "+ decades(arrNumRes[2]) + " " + units(arrNumRes[3]);
            }else{
                str = units(arrNumRes[0]) + " " + thousand(arrNumRes[0]) + " " + hundreds(arrNumRes[1]) + " "+ decades(arrNumRes[2]) + " " + units(arrNumRes[3]);
            }
        }
    }else if (arrNum.length === 3) {//100
        if (arrNumRes[1] === '1') {
            str = hundreds(arrNumRes[0]) + " "+ teens(arrNumRes[2]);
        }else{
            str = hundreds(arrNumRes[0]) + " "+ decades(arrNumRes[1]) + " " + units(arrNumRes[2]);
        }
    }else if (arrNum.length === 2) {//10
        if (arrNumRes[0] === '1') {
            str = (teens(arrNumRes[1]));
        }else{
            str = (decades(arrNumRes[0]) + " " + units(arrNumRes[1]));
        }
    }else if (arrNum.length === 1) { //1
        if (arrNumRes[0] === '0') {
            str = "ноль";
        }else{
            str = (units(arrNumRes[0]));
        }
    }else{
        str = "Что-то пошло не так!";
    }
    return str;
};
function billion(num) {
    if (num === '1') {
        return "миллиард";
    }else if (num === '2' || num === '3' || num === '4') {
        return "миллиарда";
    }else{
        return "миллиардов";
    }
}
function million(num) {
    if (num === '1') {
        return "миллион";
    }else if (num === '2' || num === '3' || num === '4') {
        return "миллиона";
    }else{
        return "миллионов";
    }
}
function thousand(num) {
    if (num === '1') {
        return "тысяча";
    }else if (num === '2' || num === '3' || num === '4') {
        return "тысячи";
    }else{
        return "тысяч";
    }
}
function hundreds(num) {
    switch(num){
        case '0':
            return "";
        case '1':
            return "сто";
        case '2':
            return "двести";
        case '3':
            return "триста";
        case '4':
            return "четыреста";
        case '5':
            return "пятьсот";
        case '6':
            return "шестьсот";
        case '7':
            return "семьсот";
        case '8':
            return "восемьсот";
        case '9':
            return "девятьсот";
        default:
            return "Что-то пошло не так";
    }
}
function decades(num) {
    switch(num){
        case '0':
            return "";
        case '1':
            return "десять";
        case '2':
            return "двадцать";
        case '3':
            return "тридцать";
        case '4':
            return "сорок";
        case '5':
            return "пятьдесят";
        case '6':
            return "шестьдесят";
        case '7':
            return "семьдесят";
        case '8':
            return "восемьдесят";
        case '9':
            return "девяносто";
        default:
            return "Что-то пошло не так";
    }
}
function units(num, fem) {
    switch(num){
        case '0':
            return "";
        case '1':
            return fem ? "одна" : "один";
        case '2':
            return fem ? "две" : "два";
        case '3':
            return "три";
        case '4':
            return "четыре";
        case '5':
            return "пять";
        case '6':
            return "шесть";
        case '7':
            return "семь";
        case '8':
            return "восемь";
        case '9':
            return "девять";
        default:
            return "Что-то пошло не так";
    }
}
function teens(num) {
    switch(num){
        case '0':
            return "десять";
        case '1':
            return"одиннадцать";
        case '2':
            return "двенадцать";
        case '3':
            return "тринадцать";
        case '4':
            return "четырнадцать";
        case '5':
            return"пятнадцать";
        case '6':
            return "шестнадцать";
        case '7':
            return "семнадцать";
        case '8':
            return "восемнадцать";
        case '9':
            return "девятнадцать";
        default:
            return "Что-то пошло не так";
    }
}

let getInputFunc_5 =() => {
    return document.getElementById("func_5").value;
};

let resultFunc_5 =() => {
    let num = getInputFunc_5();
    return document.getElementById("resultFunc_5").innerHTML = func_5(num);
};