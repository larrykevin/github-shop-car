'use strict';

import './styles/main.css';

const menuBtn = document.querySelector('.menu__btn');

const addClass = () => {
    const menu = document.querySelector('.menu');
    const menuSidebar = document.querySelector('.menu__sidebar');

    menu.classList.toggle('overflow-hidden');
    menuSidebar.classList.toggle('block');
}

menuBtn.addEventListener('click', addClass);


/* menuBtn.addEventListener('click', (event) => {
    menu.classList.toggle('overflow-hidden');
    menuSidebar.classList.toggle('block');
    console.log('Menu clickeado');
    event.preventDefault();
}); */


/*
const removeClassList = async () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let deleteClass = mySidebar.classList.remove('menu__sidebar--active');
            resolve(deleteClass)
        },  350,
            reject('RemoveClassList Error')
        );
    });
}
const scrollFunction = (start, end) => window.scrollTo(start, end);
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        mySidebar.classList.add('menu__sidebar--active');
        menuOpen = true;
        document.body.style.overflow = 'hidden';
        mySidebar.animate([
            {transform: 'translateX(450px)'},
            {transform: 'translateX(0)'}
        ],{
            duration: 400,
            easing: 'ease-in'
        });
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.body.style.overflow = 'initial';
        mySidebar.animate([
            {transform: 'translateX(0)'},
            {transform: 'translateX(450px)'}
        ],{
            duration: 400,
            easing: 'ease-in-out'
        });
        removeClassList();
    }
}); */