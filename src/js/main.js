'use strict';
let showTask = (idName) => {

    if(document.getElementById(idName).style.display === 'none') {
        document.getElementById(idName).style.display = 'inline-block';
    } else {
        document.getElementById(idName).style.display = 'none';
    }

};

let col = (idName) => {
    document.getElementById(idName).style.background = '#808da0';
    setTimeout(function() {
        if (document.getElementById(idName).style.background = '#808da0'){
            document.getElementById(idName).style.background = '';
        }
    }, 1000);
};


