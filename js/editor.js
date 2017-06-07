'use strict';
console.log('editor js is up!');

var INITIAL_TEXTS_NUM = 2;
var gEditorEls = {};

var gEditorBttns = [
    {
        glyph: '<i class="fa fa-trash-o"></i>',
        onclick: 'delTextBttnClicked(elBttn)',
        dataAttribute: null        
    },
    {
        glyph: 'A',
        onclick: 'changeFontBttnClicked(this)',
        dataAttribute: null        
    },
    {
        glyph: 'S',
        onclick: 'toggleBorderBttnClicked(elBttn)',
        dataAttribute: null        
    },
    {
        glyph: '<i class="fa fa-tint"></i>',
        onclick: 'changeColorBttnClicked(elBttn)',
        dataAttribute: null        
    },
    {
        glyph: '<i class="fa fa-plus"></i>',
        onclick: 'fontSizeBttnClicked(this)',
        dataAttribute: 'add'        
    },
    {
        glyph: '<i class="fa fa-minus"></i>',
        onclick: 'fontSizeBttnClicked(this)',
        dataAttribute: 'decrement'         
    },
    {
        glyph: '<i class="fa fa-align-left"></i>',
        onclick: 'alignBttnClicked(this)',
        dataAttribute: 'left'        
    },
    {
        glyph: '<i class="fa fa-align-center"></i>',
        onclick: 'alignBttnClicked(this)',
        dataAttribute: 'center'        
    },
    {
        glyph: '<i class="fa fa-align-right"></i>',
        onclick: 'alignBttnClicked(this)',
        dataAttribute: 'right'
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
    console.log('context:', context);  
    var img = new Image();
    img.src = url;
    img.addEventListener('load', function () {
        context.drawImage(img, 0, 0, 400, 360);
    });

//     var img = new Image();   // Create new img element
// img.addEventListener('load', function() {
//   // execute drawImage statements here
// }, false);
// img.src = 'myImage.png'; // Set source path
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
        onclick="${gBttn.onclick}" data-special="${gBttn.dataAttribute}">${gBttn.glyph}</button>`;
    });
    return `${inputHTML} ${bttnsHTML.join('')} </div>`;
}

function alignBttnClicked(elBttn, direction) {
    //find the element based on the button clicked
    //remove all other alignment classes and add the correct class
    console.log(elBttn, 'clicked! direction:', direction);
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
