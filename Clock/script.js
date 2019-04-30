/*global console*/

setInterval(function () {
    'use strict';
    var
        clock = document.querySelector('div'),
        myDate = new Date(),
        hour = myDate.getHours(),
        min = myDate.getMinutes(),
        seconds = myDate.getSeconds();
    
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    
    clock.textContent = hour + ":" + min + ":" + seconds;
}, 500);

