'use strict';
console.log('editor js is up!');

var gEditorEls;  

var gEditorBttns = [
    {
        glyph: '<i class="fa fa-align-right"></i>',
        onclick: null,
    },
    {
        glyph: '<i class="fa fa-align-center"></i>',
        onclick: null,
    },
    {
        glyph: '<i class="fa fa-align-left"></i>',
        onclick: null,
    },
    {
        glyph: '<i class="fa fa-minus"></i>',
        onclick: null,
    },
    {
        glyph: '<i class="fa fa-plus"></i>',
        onclick: null,
    },
    {
        glyph: '<i class="fa fa-tint"></i>',
        onclick: null,
    },
    {
        glyph: 'S',
        onclick: null,
    },
    {
        glyph: 'A',
        onclick: null,
    },
    {
        glyph: '<i class="fa fa-trash-o"></i>',
        onclick: null,
    }
];

function initEditor(selectedImg) {
    gEditorEls.toolBoxArea = document.querySelector('meme-toolbox');
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
