//header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


//typing Effect

let typed = new Typed('.auto-input', {
    Strings: ['Front-End Develper!', 'Back-End Develper!', 'UI Designer!', 'Gamer!'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})



// Active Link State O n Scroll

// Get All Links
let navLink = document.querySelectorAll('nav ul li a')
console.log(navLink)

//Get All Sections
let Sections = document.querySelectorAll('section')
console.log(Sections)

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20
    Sections.forEach(Section => {
        if (scrollPos > Section.offsetTop && scrollPos < (section + section.offsetheight)) {
            navLink.forEach(link => {
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });

});



/*== ----------------------------------------------------------------------------------------------------------------------- ==*/