'use strict';
console.log('editor js is up!');

function initEditor(selectedImg) {
    //init globals
    renderCanvas(selectedImg.url);
    console.log('selectedImg.url', selectedImg.url);
    
    // renderEditor();
}

   function renderCanvas(url) {
            var canvas = document.getElementById('memeCanvas');    
            var context = canvas.getContext('2d');

            var img = new Image();
            // img.src = "assets/imgs/galleryImgs/1.jpg";
            img.src = "url";
            

            // img.onload = function () {
            //     context.drawImage(img, 0, 0, 400, 360);
            // };
            img.addEventListener('load', function () {
                context.renderCanvas(img, 0, 0, 400, 360);
            });
   }

    


        