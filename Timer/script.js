/*global console*/

var result = document.getElementById('result'),
    input = document.querySelector('input'),
    seconds,// Number Of Second
    idInterval,
    i = 0;

document.querySelector('button').onclick = function () {
    'use strict';
    
    result.style.borderColor = '#333';
    result.innerHTML = '00:00:00';
    seconds = document.querySelector('input').value;

    if (seconds === "") {
        return 1;
    }
    
    function calc() {
        var modSeconds = seconds,
            hour,
            min,
            affiche;
        
        hour = Math.floor(modSeconds / 3600);
        modSeconds %= 3600;
        min = Math.floor(modSeconds / 60);
        modSeconds %= 60;

        if (seconds > 0) {

            if (hour < 10) {
                hour = "0" + hour;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (modSeconds < 10) {
                modSeconds = "0" + modSeconds;
            }
            
            affiche = hour + ":" + min + ":" + modSeconds;
            
            if (hour === "00" && min === "00" && modSeconds < "10") {
                affiche = '<span style="color:#F00">' + affiche + '</span';
                result.style.borderColor = '#F00';
            }
            
            result.innerHTML = affiche;

        } else {
            clearInterval(idInterval);
            result.innerHTML = '<span style="color:#0A0">Done!</span>';
            result.style.borderColor = '#0A0';
        }

        seconds -= 1;
    }

    idInterval = setInterval(calc, 1000);
};

document.getElementsByTagName('button')[1].onclick = function () {
    
    'use strict';
    
    clearInterval(idInterval);
    result.style.border = '3px solid #333';
    result.innerHTML = '00:00:00';
    input.innerHTML = '';
};