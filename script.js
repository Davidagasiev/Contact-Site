//Menu Button
const menuBtn = document.querySelectorAll('.menu-btn'),
	menuList = document.getElementsByClassName("burgerMenu")[0],
	burgerUl = document.getElementById("burgerUl");

let menuOpen = false,
	clientHeight = document.documentElement.clientHeight;

menuBtn[1].addEventListener('click', () => {

    menuBtn[1].classList.add('open');
    menuBtn[0].classList.add('open');
    menuOpen = true;

// Show burger list
	menuList.style.display = 'block';
	menuList.style.height = 10000 + "px";
// To stop scrolling
	document.body.style.overflow = 'hidden';
});



menuBtn[0].addEventListener('click', () => {

    menuBtn[1].classList.remove('open');
    menuBtn[0].classList.remove('open');
    menuOpen = false;
// Remove burger list
	menuList.style.display = 'none';
	menuList.style.height = 0;
// To allow scrolling
	document.body.style.overflow = '';
});