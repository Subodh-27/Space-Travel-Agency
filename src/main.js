import '../styles/style.css';

import loadRoot from './utils/load-root';



// Active Header Sticky

const header = document.querySelector('header');
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});


const liLink = document.querySelectorAll("header ul li a");

liLink.forEach((element) => {
    element.addEventListener("click", (e) => {
        // e.preventDefault();
        const targetElement = e.target.href.split("#")[1];
        window.scrollTo({
            top: Math.round(
                document.querySelector(`#${targetElement}`).getBoundingClientRect().top + document.documentElement.scrollTop
            ),
            behavior: "smooth",
        });
    });
});

const sections = document.querySelectorAll("section");
const options = {
    threshold: 0.7,
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.id;
        const el = document.body.querySelector('[href="#' + id + '"]');
        if (entry.isIntersecting) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}, options);

sections.forEach((section) => {
    sectionObserver.observe(section);
});




// Active Menu Icon

const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
const homeImage = document.querySelector('.home-img');
const homeText = document.querySelector('.home-text');


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
    homeImage.classList.toggle("hide");
    homeText.classList.toggle("hide");
};

// Remove Menu List

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
    homeImage.classList.toggle("show");
    homeText.classList.toggle("show");
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



// To Root on Refresh
loadRoot();



// window.onbeforeunload = function () {
//     document.querySelector("#wrapper").style.display = "none";
//     window.scrollTo(0, 0);
// };
