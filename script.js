function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if ( menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

/*---dark--mode*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
})

/*------typing effect------*/

var typingEffect = new Typed(".typed-text", {
    strings: ["Namaste", "Sasrical", "Adaab"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})


/*----scroll animation----*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", { delay: 200});
sr.reveal(".text-btn", {delay: 100});
sr.reveal(".social_icons", { delay: 200});
sr.reveal(".featured-image", {delay: 100});


sr.reveal(".project-box", { interval: 200});

sr.reveal(".top-header", { });

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 2000});
srLeft.reveal(".contact-info", { delay: 100});


const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", {delay: 2000});
srRight.reveal(".skill-box", { delay: 100});

/*----active link-----*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrolly = window.scrolly;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        
        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]" )
            .classList.add("active-link");
        } else {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]" )
            .classList.remove("active-link");
        }

    });
}


window.addEventListener("scroll", scrollActive);

