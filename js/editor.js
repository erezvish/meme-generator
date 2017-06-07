'use strict';
console.log('editor js is up!');

var LIMITS = {
    minFontSize: 6
};

var gEditorEls = {};

var gEditorBttns = [
    {
        glyph: '<i class="fa fa-trash-o"></i>',
        onclick: 'delTextBttnClicked(this)',
        dataAttribute: null
    },
    {
        glyph: 'A',
        onclick: 'changeFontBttnClicked(this)',
        dataAttribute: null
    },
    {
        glyph: 'S',
        onclick: 'toggleBorderBttnClicked(this)',
        dataAttribute: null
    },
    {
        glyph: '<i class="fa fa-tint"></i>',
        onclick: 'changeColorBttnClicked(this)',
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
    gEditorEls.searchInput = document.querySelector('.search-input');
    // renderCanvas();
    renderEditor(INITIAL_TXTS_NUM);
}

function renderEditor(textsNum) { //TODO: function can take number of txts from gstate.txts.length
    debugger;
    var strHTML = `<form>
    <div> 
    <div class="bttn-return"> <button type="button">Return to image selection</button> </div>`;
    for (var i = 0; i < textsNum; i++) {
        strHTML += '<div>' + getToolBoxHTML(i) + '</div>';
    }
    strHTML += '</div> </form>';
    gEditorEls.toolBoxArea.innerHTML = strHTML;
}

function getToolBoxHTML(id) {
    var inputHTML = ` <div> <input type="text" id="txt${id}" onkeyup="textInserted(this)" placeholder="input your text"> </div>
                    <div class="tool-buttons">`;
    var bttnsHTML = gEditorBttns.map(function (gBttn, ) {
        return `<button type="button" 
        onclick="${gBttn.onclick}" data-special="${gBttn.dataAttribute}" data-txt-num="${id}">${gBttn.glyph}</button>`;
    });
    return `${inputHTML} ${bttnsHTML.join('')} </div>`;
}

function textInserted(elTxtInput) {
    // console.log(elTxtInput);
    var txtId = +elTxtInput.id.slice(3); //text Id preceded by 3 letters;
    // console.log('captured text:', gState.txts[txtId]);
    gState.txts[txtId].txt = elTxtInput.value;
    renderCanvas();
}

function alignBttnClicked(elBttn) {
    var txtId = elBttn.getAttribute('data-txt-num');
    var requiredAlignment = elBttn.getAttribute('data-special')

    gState.txts[txtId].txtAlign = requiredAlignment;
    renderCanvas();
}

function fontSizeBttnClicked(elBttn) { //TODO: replace all bttn in code //in this function use Math.Max
    var txtId = elBttn.getAttribute('data-txt-num');
    var requiredChange = elBttn.getAttribute('data-special');

    if (requiredChange === 'add') gState.txts[txtId].fontCurrSize++;
    else gState.txts[txtId].fontCurrSize--;
    if (gState.txts[txtId].fontCurrSize < LIMITS.minFontSize) gState.txts[txtId].fontCurrSize = LIMITS.minFontSize;
    renderCanvas();
}

function changeFontBttnClicked(elBttn) {

}

function toggleBorderBttnClicked(elBttn) {
    var txtId = elBttn.getAttribute('data-txt-num');
    gState.txts[txtId].isBorder = !gState.txts[txtId].isBorder;
    renderCanvas();
}

function changeColorBttnClicked(elBttn) {

}

function addTextBttnClicked(elBttn) {

}

function delTextBttnClicked(elBttn) {

}

