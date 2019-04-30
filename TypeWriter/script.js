/*global console*/

var myP = document.querySelector('p'),
    myButton = document.querySelector('button'),
    p = "Hello This Effect By JavaScript",
    myInterval,
    i = 0;

function calc() {
    'use strict';
    myP.innerHTML += p[i];
    i += 1;
    if (i >= p.length) {
        clearTimeout(myInterval);
        myP.innerHTML += '<br>';
        i = 0;
    }
}

myButton.onclick = function () {
    'use strict';
    myInterval = setInterval(calc, 50);
};