

/*
==============================================
==============================================
*/

/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

/* end scroll to top */


/*
==============================================
==============================================
*/


/* start header */

let toggleMenu = document.querySelector(".header #toggle");
let headerMenu = document.querySelector(".header .menu");
let menuLis = document.querySelectorAll(".header .menu li");


toggleMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    toggleMenu.classList.toggle("fa-times");
});

menuLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // e.preventDefault();
        headerMenu.classList.toggle("active");
        toggleMenu.classList.toggle("fa-times");
    });
});


// function toggleMenu(){
//     // var menuToggle = document.querySelector('.toggle');
//     // var menu = document.querySelector('.menu');
//     // menuToggle.classList.toggle('active')
//     headerMenu.classList.toggle('active');
// }


/* todark */
let todark = document.querySelector(".header .todark");

todark.addEventListener("click", () => {
    if(!todark.classList.contains("forward")) {
        todark.classList.add("forward");
        todark.classList.remove("reverse");
    } else {
        todark.classList.add("reverse");
        todark.classList.remove("forward");
    }
});

/* ====== start dark mode ====== */

let dayNight = document.querySelector(".day-night");
let iDarkColor = document.querySelector(".day-night i");
let body = document.querySelector("body");

if(localStorage.getItem("theme") == null) {
    localStorage.getItem("theme", "light");
}

let d2localData = localStorage.getItem("theme");
if(d2localData == "light") {
    body.classList.remove("dark");
} else if (d2localData == "dark") {
    body.classList.add("dark");
}

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if(body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        todark.classList.add("forward");
        todark.classList.remove("reverse");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        todark.classList.add("reverse");
        todark.classList.remove("forward");
    }
});




/* ====== end dark mode ====== */

/*
==============================================
==============================================
*/

/* === start scroll secticon acrive link === */

let sections = document.querySelectorAll("section[id]");

function scrollActive() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {

        let sectionHeight = current.offsetHeight,
            sectionTop =current.offsetTop - 100 , // -58
            sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

window.addEventListener('scroll', scrollActive);
window.addEventListener("load", scrollActive);


/* === end scroll secticon acrive link === */

/*
==============================================
==============================================
*/

/* === start footer dateYear === */

window.addEventListener("load", ()=> {
let dateYear = document.querySelector(".dateYear");
let newDate = new Date();
    dateYear.innerHTML = newDate.getFullYear();
});



/* === end footer dateYear === */

/*
==============================================
==============================================
*/

/* start Scroll Animation */

// const sr = ScrollReveal({
//     origin: 'top',
//     distance:'85px',
//     duration:2000,
//     reset: true
// })

// sr.reveal ('.home-text',{})
// sr.reveal ('.home-img',{delay:200})
// sr.reveal ('.social',{delay:200})

// sr.reveal ('.about-img',{})
// sr.reveal ('.heading',{})
// sr.reveal ('.about-text',{delay:200})

// sr.reveal ('.services-content',{})

// sr.reveal ('.work-text',{})
// sr.reveal ('.work-img',{delay:200})

// sr.reveal ('.app h1',{})
// sr.reveal ('.app',{delay:200})

// sr.reveal ('form input',{})
// sr.reveal ('form textarea',{})

/* end Scroll Animation */

/*
==============================================
==============================================
*/












