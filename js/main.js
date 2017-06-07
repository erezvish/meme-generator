'use strict';
console.log('main js is running');
var INITIAL_TXTS_NUM = 2;
var TXT_DEFAULTS = {
    txt: '',
    fontDefSize: '14px',
    txtAlign: 'center',
    fontColor: 'White',
    isBorder: true,
    fontDefFamily1: 'Arial',
}

var gState = {
    selectedImgId: null,
    txts: []
};

function initApp() {
    getInitialState();
    initGallery();
    initEditor();
    // renderCanvas();
}

function getInitialState() {
    gState.selectedImgId = null;
    gState.txts = [];
    var currTxt = {};
    for (var i = 0; i < INITIAL_TXTS_NUM; i++) {
        currTxt.txt = TXT_DEFAULTS.txt;
        currTxt.fontCurrSize = TXT_DEFAULTS.fontDefSize;
        currTxt.txtAlign = TXT_DEFAULTS.txtAlign;
        currTxt.fontColor = TXT_DEFAULTS.fontColor;
        currTxt.isBorder = TXT_DEFAULTS.isBorder;
        currTxt.fontCurrFamily = TXT_DEFAULTS.fontsDefFamily;
        gState.txts.push(currTxt);
        currTxt = {};
    }
}