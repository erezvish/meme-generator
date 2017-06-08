'use strict';
console.log('editor js is up!');

var LIMITS = {
    minFontSize: 6
};

var gEditorEls = {};

var gEditorbtns = [
    {
        glyph: '<i class="fa fa-trash-o"></i>',
        onclick: 'delTextbtnClicked(this)',
        dataAttribute: null
    },
    {
        glyph: 'A',
        onclick: 'changeFontbtnClicked(this)',
        dataAttribute: null
    },
    {
        glyph: 'S',
        onclick: 'toggleBorderbtnClicked(this)',
        dataAttribute: null
    },
    {
        glyph: '<i class="fa fa-tint"></i>',
        onclick: 'changeColorbtnClicked(this)',
        dataAttribute: null
    },
    {
        glyph: '<i class="fa fa-plus"></i>',
        onclick: 'fontSizebtnClicked(this)',
        dataAttribute: 'add'
    },
    {
        glyph: '<i class="fa fa-minus"></i>',
        onclick: 'fontSizebtnClicked(this)',
        dataAttribute: 'decrement'
    },
    {
        glyph: '<i class="fa fa-align-left"></i>',
        onclick: 'alignbtnClicked(this)',
        dataAttribute: 'left'
    },
    {
        glyph: '<i class="fa fa-align-center"></i>',
        onclick: 'alignbtnClicked(this)',
        dataAttribute: 'center'
    },
    {
        glyph: '<i class="fa fa-align-right"></i>',
        onclick: 'alignbtnClicked(this)',
        dataAttribute: 'right'
    }
];

function initEditor() {
    gEditorEls.toolBoxArea = document.querySelector('.meme-toolbox');
    gEditorEls.searchInput = document.querySelector('.search-input');
    // renderCanvas();
    renderEditor(gState.txts.length);
}

function renderEditor(textsNum) { 
    var strHTML = `<form>
    <div> 
    <div class="btn-return flex justify-center"> <button class="return-button" type="button" onclick="toggleGalleryEditor()">Return to <br> meme gallery</button> </div>;
    <div class="btn-return flex justify-center"> <button class="return-button" type="button" onclick="saveBtnClicked()">Save Meme!</button> </div>`;
    for (var i = 0; i < textsNum; i++) {
        strHTML += '<div>' + getToolBoxHTML(i) + '</div>';
    }
    strHTML += '</div> </form>';
    gEditorEls.toolBoxArea.innerHTML = strHTML;
}

function getToolBoxHTML(id) {
    var inputHTML = ` <div> <input type="text" id="txt${id}" class="tool-box-txt" onkeyup="textInserted(this)" placeholder="Input your text"> </div>
                    <div class="tool-buttons">`;
    var btnsHTML = gEditorbtns.map(function (gbtn, ) {
        return `<button type="button" class="btn-edit"
        onclick="${gbtn.onclick}" data-special="${gbtn.dataAttribute}" data-txt-num="${id}">${gbtn.glyph}</button>`;
    });
    return `${inputHTML} ${btnsHTML.join('')} </div>`;
}

function textInserted(elTxtInput) {
    // console.log(elTxtInput);
    var txtId = +elTxtInput.id.slice(3); //text Id preceded by 3 letters;
    // console.log('captured text:', gState.txts[txtId]);
    gState.txts[txtId].txt = elTxtInput.value;
    renderCanvas();
}

function alignbtnClicked(elbtn) {
    var txtId = elbtn.getAttribute('data-txt-num');
    var requiredAlignment = elbtn.getAttribute('data-special')

    gState.txts[txtId].txtAlign = requiredAlignment;
    renderCanvas();
}

function fontSizebtnClicked(elbtn) { //TODO: replace all btn in code //in this function use Math.Max
    var txtId = elbtn.getAttribute('data-txt-num');
    var requiredChange = elbtn.getAttribute('data-special');

    if (requiredChange === 'add') gState.txts[txtId].fontSize++;
    else gState.txts[txtId].fontSize--;
    if (gState.txts[txtId].fontSize < LIMITS.minFontSize) gState.txts[txtId].fontSize = LIMITS.minFontSize;
    renderCanvas();
}

function changeFontbtnClicked(elbtn) {

}

function toggleBorderbtnClicked(elbtn) {
    var txtId = elbtn.getAttribute('data-txt-num');
    gState.txts[txtId].isBorder = !gState.txts[txtId].isBorder;
    renderCanvas();
}

function changeColorbtnClicked(elbtn) {

}

function addTextbtnClicked(elbtn) {

}

function delTextbtnClicked(elbtn) {

}

function saveBtnClicked() {
    var elCanvas = document.querySelector('.meme-canvas');
    window.location = elCanvas.toDataURL();
}