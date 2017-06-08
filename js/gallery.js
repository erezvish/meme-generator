'use strict';

var gImgs = [
    {
        id: 0,
        title: 'Bad Luck Brian',
        desc: '',
        url: 'assets/imgs/galleryImgs/1.jpg',
        keyWords: ['bad', 'luck', 'brian'],
    },
    {
        id: 1,
        title: 'What if I told you',
        desc: '',
        url: 'assets/imgs/galleryImgs/2.jpg',
        keyWords: ['What', 'if', 'told', 'you', 'matrix', 'morpheus'],
    },
    {
        id: 2,
        title: 'I double dare you',
        desc: '',
        url: 'assets/imgs/galleryImgs/3.jpg',
        keyWords: ['dare', 'you', 'pulp', 'fiction'],
    },
    {
        id: 3,
        title: 'Aliens',
        desc: '',
        url: 'assets/imgs/galleryImgs/4.jpg',
        keyWords: ['Aliens'],
    },
    {
        id: 4,
        title: 'Ain\'t nobody got time for that',
        desc: '',
        url: 'assets/imgs/galleryImgs/5.jpg',
        keyWords: ['time', 'got', 'angry'],
    },
    {
        id: 5,
        title: 'Buzz & Woody',
        desc: '',
        url: 'assets/imgs/galleryImgs/6.jpg',
        keyWords: ['toy', 'story', 'buzz', 'woody', 'everywhere'],
    },
    {
        id: 6,
        title: 'Tell me more',
        desc: '',
        url: 'assets/imgs/galleryImgs/7.jpg',
        keyWords: ['tell', 'more'],
    },
    {
        id: 7,
        title: 'Reuven the wanna be rabbi',
        desc: '',
        url: 'assets/imgs/galleryImgs/8.jpg',
        keyWords: ['Reuven', 'lie', 'trust', 'rabbi'],
    },
    {
        id: 8,
        title: 'Success kid',
        desc: '',
        url: 'assets/imgs/galleryImgs/9.jpg',
        keyWords: ['success', 'kid', 'luck'],
    },
    {
        id: 9,
        title: 'Look at all the fucks I give',
        desc: '',
        url: 'assets/imgs/galleryImgs/10.jpg',
        keyWords: ['fuck', 'sounds', 'music', 'maria', 'fucks'],
    },
    {
        id: 10,
        title: 'Close Enough',
        desc: '',
        url: 'assets/imgs/galleryImgs/11.jpg',
        keyWords: ['close', 'enough', 'close', 'enough', 'frustrated'],
    },
    {
        id: 11,
        title: 'WTF',
        desc: '',
        url: 'assets/imgs/galleryImgs/12.jpg',
        keyWords: ['Jackie', 'Chan', 'fuck', 'what',],
    },
    {
        id: 12,
        title: 'I don\'t think it means what you think it means',
        desc: '',
        url: 'assets/imgs/galleryImgs/13.jpg',
        keyWords: ['Inigo', 'Montoya', 'think', 'means', 'princess', 'bride'],
    },
    {
        id: 13,
        title: 'None of my Business',
        desc: '',
        url: 'assets/imgs/galleryImgs/14.jpg',
        keyWords: ['Kermit', 'business', 'none',]
    }
]

var gElImgs;

function initGallery() {
    gElImgs = document.querySelectorAll('.thumbnails li img') //imgs selector
    console.log('img selector initgallery', gElImgs);
    renderImgs(gElImgs, gImgs);

}

function renderImgs(elImgs, imgs) {
    clearElImgs(elImgs);
    elImgs.forEach(function (elImg, idx) {
        var currIdx = idx +  gState.displayedImgsNum * gState.currBatch;
        if (imgs[currIdx]) {
            elImg.src = imgs[currIdx].url;
            elImg.id = 'img' + imgs[currIdx].id;
            elImg.onclick = imgClicked(elImg);
        } else {
            elImg.src = 'assets/imgs/galleryImgs/noImg.jpg';
            elImg.onclick = '';
        }
    });
}

function clearElImgs(elImgs) {
    elImgs.forEach(function (elImg) {
        elImg.src = '';
        elImg.id = '';
        elImg.onclick = '';
    });
}

function imgClicked(elImg) {
    return function () {
        var elImgId = +elImg.id.slice(3); //DOM ID starts with 3 letters. Model has only numbers

        var selectedImg = gImgs.find(function (img) {
            return img.id === elImgId;
        });
        gState.selectedImgId = selectedImg.id;
        renderCanvas(selectedImg.url); //draw canvas with selected img and render editor
        console.log('img clicked:', elImg.src);
        toggleGalleryEditor();
    }
}

function searchActivated(keyWord) { 
    if (keyWord) {
        console.log('I am called from tag search');
    } else {
        if (!gEditorEls.searchInput.value) renderImgs(gElImgs, gImgs);
        else {
            var userKeyWords = gEditorEls.searchInput.value.split(' ');

            var filteredImgs = [];
            userKeyWords.forEach(function (userKeyWord) {
                var currFilteredImgs = gImgs.filter(function (gImg) {
                    return gImg.keyWords.some(function (keyWord) {
                        return userKeyWord.toUpperCase() === keyWord.toUpperCase();
                    });
                });
                filteredImgs = _.uniq(filteredImgs.concat(currFilteredImgs));
            });
            renderImgs(gElImgs, filteredImgs);
        }
    }
}

function toggleGalleryEditor() {
    // clearStateTxts(); //could not complete in time
    var elGallery = document.querySelector('.gallery');
    elGallery.classList.toggle('go-outside');
    var elEditor = document.querySelector('.meme-editor');
    elEditor.classList.toggle('go-inside');
}


function loadBtnClicked() {
    var numOfBatches = parseInt(gImgs.length / gState.displayedImgsNum);
    // gState.currBatch = (gState.currBatch === numOfBatches) ? 0 : gState.currBatch++;
    if (gState.currBatch === numOfBatches)      gState.currBatch = 0; 
    else                                        gState.currBatch++;
    renderImgs(gElImgs, gImgs);
}
