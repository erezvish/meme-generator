'use strict';

function renderCanvas() {
    var canvas = document.getElementById('memeCanvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var img = new Image();
    img.src = gImgs[gState.selectedImgId].url;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    var locYTop = canvas.height / 8;
    gState.txts.forEach(function (txt, idx) { //TODO: use all other txts properties
        var temp = txt.fontSize + 'px ' + txt.fontFamily;
        context.font = txt.fontSize + 'px ' + txt.fontFamily;
        // context.textAlign = txt.txtAlign;
        context.fillStyle = txt.fontColor;
        context.fillText(txt.txt, 40, (locYTop + locYTop * 6 * idx)
            + (txt.fontSize * (idx + 1) - txt.fontSize * 2 * idx), canvas.width - 80); //quick and dirty but working. Sorry!

        if (txt.isBorder) {
            context.lineWidth = 1;
            context.strokeStyle = 'black';
            context.strokeText(txt.txt, 40, (locYTop + locYTop * 6 * idx)
                + (txt.fontSize * (idx + 1) - txt.fontSize * 2 * idx), canvas.width - 80); //quick and dirty but working. Sorry!
        }
    });
}



