"use strict";
var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

var req = new XMLHttpRequest();
req.open('GET', 'http://httpbin.org/get', true);
req.addEventListener('load', function () {
    console.log("Content", req.responseText);
}, false);
req.addEventListener('abort', function (event) {
    console.error("Abort this request.");
}, false);
req.send();

// abort
if(req.readyState !== XMLHttpRequest.UNSENT) {
    req.abort();
}
