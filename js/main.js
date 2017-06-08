'use strict';
console.log('main js is running');
var INITIAL_TXTS_NUM = 2;
var TXT_DEFAULTS = {
    txt: '',
    fontSize: 24,
    txtAlign: 'center',
    fontColor: 'White',
    isBorder: false,
    fontFamily: 'Arial',
}

var gState = {
    selectedImgId: null,
    txts: []
};

function initApp() {
    getInitialState();
    initGallery();
    initEditor();
}

function getInitialState() {
    gState.selectedImgId = null;
    gState.txts = [];
    var currTxt = {};
    for (var i = 0; i < INITIAL_TXTS_NUM; i++) {
        currTxt.txt = TXT_DEFAULTS.txt;
        currTxt.fontSize = TXT_DEFAULTS.fontSize;
        currTxt.txtAlign = TXT_DEFAULTS.txtAlign;
        currTxt.fontColor = TXT_DEFAULTS.fontColor;
        currTxt.isBorder = TXT_DEFAULTS.isBorder;
        currTxt.fontFamily = TXT_DEFAULTS.fontFamily;
        gState.txts.push(currTxt);
        currTxt = {};
    }
}