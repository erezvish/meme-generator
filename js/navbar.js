'use strict';
console.log('navbar JS is up');

function navArrowClicked() {
    var elMenuItems = document.querySelectorAll('.drop-down');
    elMenuItems.forEach(function(menuItem){
        menuItem.classList.toggle('unseen');
    });
}