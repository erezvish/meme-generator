'use strict';

function renderCanvas() {
    var canvas = document.getElementById('memeCanvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log('context:', context);
    var img = new Image();
    img.src = gImgs[gState.selectedImgId].url;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    gState.txts.forEach(function (txt, idx) { //TODO: use all other txts properties
        context.font = txt.fontCurrSize + 'px';
        context.strokeText(txt.txt, 0, 30 * (idx + 1), canvas.width);
    });
}


