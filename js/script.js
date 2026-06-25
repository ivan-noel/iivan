// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 50){

        navbar.classList.add(
            "scrolled"
        );

    }else{

        navbar.classList.remove(
            "scrolled"
        );

    }

});

// ==========================
// MOBILE MENU
// ==========================

const hamburger =
document.querySelector(
".hamburger"
);

const navLinks =
document.querySelector(
".nav-links"
);

if(hamburger){

    hamburger.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );

    });

}

// ==========================
// AUTO CLOSE MENU
// ==========================

document
.querySelectorAll(
".nav-links a"
)
.forEach(link => {

    link.addEventListener(
    "click",
    () => {

        navLinks.classList.remove(
            "active"
        );

    });

});

// ==========================
// SCROLL REVEAL
// ==========================

const reveals =
document.querySelectorAll(
".reveal"
);

function revealOnScroll(){

    reveals.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element
        .getBoundingClientRect()
        .top;

        const revealPoint =
        120;

        if(
            revealTop <
            windowHeight -
            revealPoint
        ){

            element.classList.add(
                "active"
            );

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections =
document.querySelectorAll(
"section"
);

const navItems =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.offsetHeight;

        if(

            window.scrollY >=
            sectionTop

            &&

            window.scrollY <
            sectionTop +
            sectionHeight

        ){

            current =
            section.getAttribute(
                "id"
            );

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
            "active"
        );

        if(

            link.getAttribute(
                "href"
            )

            ===

            "#" + current

        ){

            link.classList.add(
                "active"
            );

        }

    });

});

// ==========================
// BACK TO TOP
// ==========================

const backToTop =
document.getElementById(
"backToTop"
);

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 400){

        backToTop.classList.add(
            "show"
        );

    }else{

        backToTop.classList.remove(
            "show"
        );

    }

});

backToTop.addEventListener(
"click",
() => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================
// LIGHTBOX
// ==========================

const galleryImages =
document.querySelectorAll(
".slide img"
);

const lightbox =
document.querySelector(
".lightbox"
);

const lightboxImage =
document.querySelector(
".lightbox-image"
);

const closeLightbox =
document.querySelector(
".close-lightbox"
);

galleryImages.forEach(image => {

    image.addEventListener(
    "click",
    () => {

        lightbox.classList.add(
            "show"
        );

        lightboxImage.src =
        image.src;

    });

});

closeLightbox.addEventListener(
"click",
() => {

    lightbox.classList.remove(
        "show"
    );

});

lightbox.addEventListener(
"click",
(e) => {

    if(e.target === lightbox){

        lightbox.classList.remove(
            "show"
        );

    }

});

// ==========================
// GALLERY CAROUSEL
// ==========================

const slides =
document.querySelectorAll(
".slide"
);

const prevBtn =
document.querySelector(
".prev"
);

const nextBtn =
document.querySelector(
".next"
);

const dotsContainer =
document.querySelector(
".carousel-dots"
);

let currentSlide = 0;

slides.forEach((_, index) => {

    const dot =
    document.createElement(
        "div"
    );

    dot.classList.add(
        "dot"
    );

    if(index === 0){

        dot.classList.add(
            "active"
        );

    }

    dot.addEventListener(
    "click",
    () => {

        showSlide(index);

    });

    dotsContainer.appendChild(
        dot
    );

});

const dots =
document.querySelectorAll(
".dot"
);

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove(
            "active"
        );

    });

    dots.forEach(dot => {

        dot.classList.remove(
            "active"
        );

    });

    slides[index].classList.add(
        "active"
    );

    dots[index].classList.add(
        "active"
    );

    currentSlide = index;

}

nextBtn.addEventListener(
"click",
() => {

    let next =
    currentSlide + 1;

    if(next >= slides.length){

        next = 0;

    }

    showSlide(next);

});

prevBtn.addEventListener(
"click",
() => {

    let prev =
    currentSlide - 1;

    if(prev < 0){

        prev =
        slides.length - 1;

    }

    showSlide(prev);

});

setInterval(() => {

    let next =
    currentSlide + 1;

    if(next >= slides.length){

        next = 0;

    }

    showSlide(next);

}, 5000);

// ==========================
// MUSIC PLAYER
// ==========================

const music =
document.getElementById(
"bgMusic"
);

const musicButton =
document.getElementById(
"musicToggle"
);

let isPlaying = false;

musicButton.addEventListener(
"click",
() => {

    if(!isPlaying){

        music.play();

        musicButton.innerHTML =
        "⏸";

        isPlaying = true;

    }else{

        music.pause();

        musicButton.innerHTML =
        "▶";

        isPlaying = false;

    }

});

