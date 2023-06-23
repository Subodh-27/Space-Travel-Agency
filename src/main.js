import '../styles/style.css';

import loadRoot from './utils/load-root';

// Active Header Sticky

const header = document.querySelector('header');
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Active Scroll Menu

const liLink = document.querySelector('header ul li a');

const section = document.querySelectorAll('section');

function activeMenu() {
    let secLength = section.length;

    while (--secLength && window.scrollY + 500 < section[secLength].offsetTop) {
        liLink.forEach(sec => sec.classList.remove('active'));
        // liLink.classList.remove('active');
        liLink[secLength].classList.add('active');
    }
}

activeMenu();
window.addEventListener('scroll', activeMenu);



// Active Menu Icon

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};


// Remove Menu List

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
};



// Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));


loadRoot();