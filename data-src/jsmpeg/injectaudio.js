(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

    /***/ 423:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    // extracted by mini-css-extract-plugin
    
    
    /***/ })
    
    },[[423,0]]]);


function injectAudio(){

    if( document.getElementById("audio-iframe") != null ){
        document.getElementById("audio-iframe").remove();
    }

    var iframe = document.createElement('iframe');
    iframe.id = "audio-iframe";
    iframe.style.display = "none";
    iframe.src = "dist/audio.html";
    document.body.appendChild(iframe);

}

injectAudio();
setTimeout("injectAudio()", 3000);