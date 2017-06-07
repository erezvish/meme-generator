'use strict';
console.log('main js is running');

// var gImgs = [
//     { id: img1, url: 'img/popo.jpg', keywords: ['happy'] },
//     { id: img2, url: 'img/popo.jpg', keywords: ['happy'] }

// ];
var gState = {
    selectedImgId: null,
    txts: [
        {
            text: null,
            fontSize: 4,
            txtAlign: 'center',
            fontColor: 'gold'
        }]
}

function initApp(){
    initGallery();
    initEditor();
    // renderCanvas();
}