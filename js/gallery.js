'use strict';


// var gImgs = [
//     { id: img1, url: 'img/popo.jpg', keywords: ['happy'] },
//     { id: img2, url: 'img/popo.jpg', keywords: ['happy'] }
// ]
    
var gImgs = [
    {   
        id: 1,
        title: 'Bad Luck Brian',
        desc: '',
        url: 'assets/imgs/galleryImgs/1.jpg',
        keywords: ['bad','luck','brian'],
    },
    {   
        id: 2,
        title: 'What if I told you',
        desc: '',
        url: 'assets/imgs/galleryImgs/2.jpg',
        keywords: ['What if', 'told you', 'matrix', 'morpheus'],
    },
    {   
        id: 3,
        title: 'I double dare you',
        desc: '',
        url: 'assets/imgs/galleryImgs/3.jpg',
        keywords: ['I dare you', 'pulp fiction'],
    },
    {   
        id: 4,
        title: 'Elians',
        desc: '',
        url: 'assets/imgs/galleryImgs/4.jpg',
        keywords: ['elians'],
    },
    {   
        id: 5,
        title: 'Ain\'t nobody got time for that',
        desc: '',
        url: 'assets/imgs/galleryImgs/5.jpg',
        keywords: ['time','got', 'angry'],
    },
    {   
        id: 6,
        title: 'Buzz & Woody',
        desc: '',
        url: 'assets/imgs/galleryImgs/6.jpg',
        keywords: ['toy story','buzz','woody','everywher'],
    },
    {   
        id: 7,
        title: 'Tell me more',
        desc: '',
        url: 'assets/imgs/galleryImgs/7.jpg',
        keywords: ['tell','more'],
    },
    {   
        id: 8,
        title: 'Reuven the wanna be rabbi',
        desc: '',
        url: 'assets/imgs/galleryImgs/8.jpg',
        keywords: ['Reuven','lie','trust','rabbi'],
    },
    {   
        id: 9,
        title: 'Success kid',
        desc: '',
        url: 'assets/imgs/galleryImgs/9.jpg',
        keywords: ['success', 'kid'],
    },
    {   
        id: 10,
        title: 'Look at all the fucks I give',
        desc: '',
        url: 'assets/imgs/galleryImgs/10.jpg',
        keywords: ['fuck','sounds of music','maria','fucks'],
    },
    {   
        id: 11,
        title: 'Close Enough',
        desc: '',
        url: 'assets/imgs/galleryImgs/11.jpg',
        keywords: ['close enough', 'close','enough', 'frustrated'],
    },
    {   
        id: 12,
        title: 'WTF',
        desc: '',
        url: 'assets/imgs/galleryImgs/12.jpg',
        keywords: ['Jackie Chan','fuck','what',],
    },
    {   
        id: 13,
        title: 'I don\'t think it means what you think it means',
        desc: '',
        url: 'assets/imgs/galleryImgs/13.jpg',
        keywords: ['Inigo Montoya', 'think','means','princess bride'],
    },
    {   
        id: 14,
        title: 'None of my Business',
        desc: '',
        url: 'assets/imgs/galleryImgs/14.jpg',
        keywords: ['Kermit','business','none',]
    }
]

var gElImgs;

function initGallery() {
    gElImgs = document.querySelectorAll('.thumbnails li img') //imgs selector
    console.log('img selector initgallery', gElImgs);
    renderImgs(gElImgs,gImgs);
    
}

//push X pictures + ids to the HTML placeholders
function renderImgs(elImgs,imgs) {
    elImgs.forEach(function(elImg,idx) {
        elImg.src= gImgs[idx].url;
    });
}

function searchBoxClicked (keyWord) {
    if (keyword) {
        //filter db by keyword
    } else {
        //get value from user-input and filter db (query selector input)
    }
    //return currentImgs - imgs that follow the search criteria
}

function imgClicked (elImg) {
    var elImgId = elImg.id;
    var selectedImg = gImgs.find(function (img) {
        return img.id === elImg;
    });
    initEditor(selectedImg); //draw canvas with selected img and render editor
}


