'use strict';
console.log('editor js is up!');

var INITIAL_TEXTS_NUM = 2;
var gEditorEls = {};

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

function initEditor() {
    gEditorEls.toolBoxArea = document.querySelector('.meme-toolbox');
    renderCanvas(null);
    renderEditor(INITIAL_TEXTS_NUM);
}

function renderCanvas(url) {
    var canvas = document.getElementById('memeCanvas');
    var context = canvas.getContext('2d');

    var img = new Image();
    // img.src = "images/koala.jpg";
    img.src = url;


    // img.onload = function () {
    //     context.drawImage(img, 0, 0, 400, 360);
    // };
    img.addEventListener('load', function () {
        context.renderCanvas(img, 0, 0, 400, 360);
    });
}

function renderEditor(textsNum) {
    var strHTML = `<form>
    <div> 
    <div class="button"> <button type="button">Return to image selection</button> </div>`;
    for (var i = 0; i < textsNum; i++) {
        strHTML += '<div>' + getToolBoxHTML(textsNum, i) + '</div>';
    }
    strHTML += '</div> </form>';
    gEditorEls.toolBoxArea.innerHTML = strHTML;
}

function getToolBoxHTML(id) {
    var inputHTML = ` <div> <input type="text" id="text${id}" placeholder="input your text"> </div>
                    <div class="tool-buttons">`;
    var bttnsHTML = gEditorBttns.map(function (gBttn, ) {
        return `<button type="button" 
        onclick="${gBttn.onclick}">${gBttn.glyph}</button>`;
    });
    return `${inputHTML} ${bttnsHTML.join('')} </div>`;
}

function alignBttnClicked(elBttn) {
    //remove all other alignment classes and add the correct class
}

function fontSizeBttnClicked(elBttn) {
    //increase or decrease font size based on value. TODO: Determine how to get selected text
}

function changeFontBttnClicked(elBttn) {
    //See above TODO
}

function toggleBorderBttnClicked(elBttn) {

}

function changeColorBttnClicked(elBttn) {

}

function addTextBttnClicked(elBttn) {

}

function delTextBttnClicked(elBttn) {

}

function searchBttnClicked(elBttn) {

}
