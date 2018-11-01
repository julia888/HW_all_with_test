let array_1 = (arr) => {
    let newArr = [];
    arr = arr.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== ' '){
            newArr.push(+arr[i]);
        }
    }
    let min = newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        if (min > newArr[i]) {
            min = newArr[i];
        }
    }
    return(min);
};
module.exports = array_1;