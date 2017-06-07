'use strict';

function renderCanvas(url) {
    var canvas = document.getElementById('memeCanvas');
    var context = canvas.getContext('2d');
    console.log('context:', context);
    var img = new Image();
    img.src = url;
    img.addEventListener('load', function () {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    });
}


function renderCanvasTxt() {
    var canvas = document.querySelector('.txt-canvas');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    gState.txts.forEach(function (txt, idx) { //TODO: use all other txts properties
        context.font = txt.fontCurrSize +'px';
        context.strokeText(txt.txt, 0, 30 * (idx + 1) , canvas.width);
    });
}


