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
        context.font =text.fontCurrFamily + txt.fontCurrSize + 'px';
        context.strokeStyle = txt.fontColor;
  
        context.strokeText(txt.txt,10, 150 * idx + 20 , canvas.width);
    });
}


/*

fontColor:"White"****
fontCurrFamily:undefined
fontCurrSize:14 ******
isBorder:true
txt:""
txtAlign

function drawStroked(text, x, y) {
    ctx.font = "80px Sans-serif"

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = 'white';

    ctx.fillText(text, x, y);
}
*/
