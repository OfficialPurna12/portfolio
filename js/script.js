let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.purna',  {
    strings: ['Graphics Designer', 'Web Developer', 'Content Creator', 'YouTuber', 'Blogger', 'Freelancer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

 const typed1 = new Typed('.slides',  {
    strings: ['Graphics Designer', 'Web Developer', 'Content Creator', 'YouTuber', 'Blogger', 'Freelancer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });


 