//toggle background active
//changing slides like 1,2,3
const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
        if(slide.classList.contains(name)) {
            slide.classList.add('active');

        }
    });
};
//switch background
//for changing background of 1,2,3
window.addEventListener('load',() => {
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            slideBtnList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});
//Activate sections
//activate navigationbar
 const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if(section.classList.contains(name)){
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
 };

 //Navigation to sections 
 //perform any particular function of  section like home,aboutus....
 window.addEventListener('load',  () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function (e) {
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
 });

 //Reset header to initial state
 const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
 };

 //initial navigation
 const initNavigation =() => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about') {
            el.classList.add('active');

        }
    });
    sectionNavigator('about');
 };

 //Toggle Menu
 //for mobile view
 const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile')
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
    
 };
 //for bride and groom page
 function redirect(){
    window.location = "bride.html"
 }
 function redirect1(){
    window.location = "groom.html"
 }
//for lehanga
function lehanga(){
    window.location = "lehanga.html"
}
//for Makeover
function makeup(){
    window.location = "makeup.html"
}
//for Mehndi
function mehndi(){
    window.location = "mehndi.html"
}
//for cinematography
function cinema(){
    window.location = "cinema.html"
}
//for Cake
function cake(){
    window.location = "cake.html"
}
//for Event Planner
function eventplanner(){
    window.location = "eventplanner.html"
}

//contact button
function sendEmail(){
    document.write("submitted successfully");
}