/*global console*/

var inputTitle = document.querySelector('input'),
    inputContent = document.querySelector('textarea'),
    liveTitle = document.querySelector('h3'),
    liveContent = document.querySelector('p');

console.log(inputContent);

inputTitle.onkeyup = function () {
    'use strict';
    liveTitle.textContent = inputTitle.value;
};
inputContent.onkeyup = function () {
    'use strict';
    liveContent.textContent = inputContent.value;
};