'use strict';

function renderCanvas(url) {
    var canvas = document.getElementById('memeCanvas');
    var context = canvas.getContext('2d');
    console.log('context:', context);  
    var img = new Image();
    img.src = url;
    img.addEventListener('load', function () {
        context.drawImage(img, 0, 0, 400, 360);
    });
}


 function renderCanvasTxt() {
            var canvas = document.querySelector('.txt-canvas');
            var context = canvas.getContext('2d');

            context.font = gState.txts[0].fontCurrSize;
            context.strokeText(gState.txts[0].txt, 20, 100);
        }


