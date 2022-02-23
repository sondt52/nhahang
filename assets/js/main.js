/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //Validate that varibles exist 
    if(toggle && nav){
        // thêm class show-menu vào thẻ nav__menu
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we can remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change Background header
function scrollHeader(){
    const nav = document.getElementById('header');
    //khi scroll quá 200 view-port thì hiển thị scroll-header
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// Show scroll top 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //khi scroll quá 200 view-port thì hiển thị scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)

// =========== dark theme ========
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
// previously select topic(khi nguoi dung da chon)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme
const getCurrentTheme = () =>document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () =>themeButton.body.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'
// we validate if the ...
if(selectedTheme){
    // If the val ....
    document.body.classList[selectedTheme ===  'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon ===  'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// active / deactive with butoon
themeButton.addEventListener('click',()=>{
    // add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
// ==========scroll animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(`.home__data, .home__img, .about__data, .about__img`,{
    interval: 200
})