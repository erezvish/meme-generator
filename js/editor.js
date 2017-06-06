'use strict';
console.log('editor js is up!');

var gEditorTools = [
    {
        type: null,
        glyph: null,
        onclick: null,

    }
]

function initEditor(selectedImg) {
    //init globals selectors
    renderCanvas(selectedImg.url);
    renderEditor();
}

function renderCanvas(url) {
    var canvas = document.getElementById('memeCanvas');
    var context = canvas.getContext('2d');

    var img = new Image();
    // img.src = "images/koala.jpg";
    img.src = "url";


    // img.onload = function () {
    //     context.drawImage(img, 0, 0, 400, 360);
    // };
    img.addEventListener('load', function () {
        context.renderCanvas(img, 0, 0, 400, 360);
    });
}

function renderEditor() {
    //render the back button
    //call render text or something like that and append to location in the dom - that's how we will add more texts
}

function alignBttnClicked (elBttn) {
    //remove all other alignment classes and add the correct class
}

function fontSizeBttnClicked (elBttn) {
    //increase or decrease font size based on value. TODO: Determine how to get selected text
}

function changeFontBttnClicked (elBttn) {
    //See above TODO
}

function toggleBorderBttnClicked (elBttn) {

}

function changeColorBttnClicked (elBttn) {

}

function addTextBttnClicked (elBttn) {

}

function delTextBttnClicked (elBttn) {

}

function searchBttnClicked (elBttn) {

}
