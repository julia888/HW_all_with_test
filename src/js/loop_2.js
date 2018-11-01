const loop_2 = (num) => {
    //числа на которые можно делить
    for (let i = 2; i < num ; i++) {
        if ((num % i) !== 0){
            return("Число "+ num +" простое");
        }else{
            return("Число " + num + " сложное");
        }
    }
};
module.exports = loop_2;
