'use strict';
console.log('main js is running');

var gImgs = [
    { id: img1, url: 'img/popo.jpg', keywords: ['happy'] },
    { id: img2, url: 'img/popo.jpg', keywords: ['happy'] }

];
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

var gElImgs;

function init() {
    gElImgs = document.querySelectorAll('') //imgs selector
}

function renderImgs() {
    //push X pictures + ids to the HTML placeholders
}

function searchBoxClicked (keyWord) {
    if (keyword) {
        //filter db by keyword
    } else {
        //get value from user-input and filter db (query selector input)
    }
    //return currentImgs - imgs that follow the search criteria
}

function imgClicked (elImg) {
    var elImgId = elImg.id;
    var selectedImg = gImgs.find(function (img) {
        return img.id === elImg;
    });
    initEditor(selectedImg); //draw canvas with selected img and render editor
}
