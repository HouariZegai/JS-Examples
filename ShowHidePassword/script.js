/*global console*/

var myInput = document.querySelector('input'),
    myButton = document.querySelector('button');

myButton.onclick = function () {
    'use strict';
    
    if (myInput.getAttribute('type') === "password") {
        myInput.setAttribute('type', 'text');
        myButton.textContent = 'Hide Password';
    } else {
        myInput.setAttribute('type', 'password');
        myButton.textContent = 'Show Password';
    }
};