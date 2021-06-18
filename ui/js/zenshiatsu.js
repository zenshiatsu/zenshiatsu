/*
window.addEventListener("scroll", function () {
    // var header = document.querySelector("header")
    // var element = document.getElementById("logo");
    var element = document.querySelector("#logo")
    element.classList.toggle("sticky2", window.scrollY > 0);
})

/////
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("logo");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky2")
    } else {
        navbar.classList.remove("sticky2");
    }
}
*/

/* STICKY */
/*
var logo = document.getElementById("logo");
var sticky = logo.offsetTop;

window.addEventListener("scroll", function () {
    // var header = document.querySelector("header")
    // var element = document.getElementById("logo");
    var logo = document.querySelector("#logo")
    logo.classList.toggle("sticky2", window.scrollY >= sticky);
})
*/




/*
function doSomething() {
    console.info('DOM loaded');

    imagesLoaded(document.querySelector('#section_01'), function (instance) {
        console.log('all images are loaded');

        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            // el: this.el,
            smooth: true
        });

        // var scroll = new LocomotiveScroll();
        const target = document.querySelector('#section_01');
        scroll.scrollTo(target);
    });

}

// readyState
if (document.readyState === 'loading') {
    // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', doSomething);
} else {
    // `DOMContentLoaded` has already fired
    doSomething();
}
*/