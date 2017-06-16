'use strict';

window.onload = function Tabs() {
    var bindAll = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for(var i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change);
        }
    };

    var clear = function() {
        var menuElements = document.querySelectorAll('[data-tab]');
        for(var i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
           var id = document.querySelectorAll('.tabcontent');
           id[i].classList.remove('active');
        }
    };

    var change = function(e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
       // document.getElementById(id).classList.add('active');
        if (document.getElementById(id) === null){
            var tab = document.querySelectorAll('.tabcontent');
            tab[0].classList.add('active');

        } else {
            document.getElementById(id).classList.add('active');
        }
    };

    bindAll();
};

// Tabs();