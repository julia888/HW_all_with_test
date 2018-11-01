const cond_1 = (arr) => {
    if (arr[0]%2 === 0) {
        return arr[0] * arr[1];
    }else{
        return +arr[0] + +arr[1];
    }
};
module.exports = cond_1;