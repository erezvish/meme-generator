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

var gState = {};

function initApp() {
    getInitialState();
    initGallery();
    initEditor();
}

function getInitialState() {
    gState.selectedImgId = null;
    gState.currBatch = 0;
    gState.displayedImgsNum = 6;
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

// function clearStateTxts() { //could not complete in time
//     gState.txts.forEach(function (gTxt) {
//         gTxt = TXT_DEFAULTS.txt;
//         gTxt.fontSize = TXT_DEFAULTS.fontSize;
//         gTxt.txtAlign = TXT_DEFAULTS.txtAlign;
//         gTxt.fontColor = TXT_DEFAULTS.fontColor;
//         gTxt.isBorder = TXT_DEFAULTS.isBorder;
//         gTxt.fontFamily = TXT_DEFAULTS.fontFamily;
//     });
// }