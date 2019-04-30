/*global console , $*/

$(document).ready(function () {
    'use strict';
    
    $("p").mouseenter(function () {
        $(this).css("color", "#F00");
        $(this).css("cursor", "pointer");
    });
    
    $("p").mouseleave(function () {
        $(this).css("color", "#080");
    });
    
});