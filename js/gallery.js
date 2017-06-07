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

//TODO: currently only the first 6 images are rendered. The rest are ignored. Change!
function renderImgs(elImgs, imgs) {
    clearElImgs(elImgs);
    elImgs.forEach(function (elImg, idx) {
        if (imgs[idx]) {
            elImg.src = imgs[idx].url;
            elImg.id = 'img' + imgs[idx].id;
            elImg.onclick = imgClicked(elImg);
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
        //TODO: grabbing the model img may be an overkill. if only img src needed elImg has it
        //leaving it for now to see if will be needed later. Remove if not necessary
        var selectedImg = gImgs.find(function (img) {
            return img.id === elImgId;
        });
        gState.selectedImgId = selectedImg.id;
        renderCanvas(selectedImg.url); //draw canvas with selected img and render editor
        console.log('img clicked:', elImg.src);
    }
}

function searchActivated(keyWord) { //TODO: filter uniques from the result
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
                filteredImgs = filteredImgs.concat(currFilteredImgs);
            });
            // console.log(filteredImgs);
            renderImgs(gElImgs, filteredImgs);
        }
    }
}



