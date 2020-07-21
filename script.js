//Menu Button
const 
	menuBtn  = document.querySelectorAll('.menu-btn'),
	menuList = document.getElementsByClassName("burgerMenu")[0],
	burgerUl = document.getElementById("burgerUl");

let menuOpen = false;

menuBtn[1].addEventListener('click', () => {
	menuList.style.opacity = "1";
    menuBtn[1].classList.add('open');
    menuBtn[0].classList.add('open');
    menuOpen = true;

// Show burger list
	menuList.style.display = 'block';
	menuList.style.height = 100 + "vh";
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


// More questions
const moreInfo = document.getElementsByClassName("more-info")[0],
	morebtn = document.getElementById("morebtn");
let moreInfoOpened = false;
morebtn.addEventListener("click", () => {
	moreInfoOpened = true;
	if (window.innerWidth <= 580 && moreInfoOpened) {
		submitbtnDiv.style.margin = "200px auto 5px auto";
		submitbtnDiv.style.textAlign = 'center';
	}
	moreInfo.style.display = "block";
	morebtn.style.display = 'none';

});


// Form validation
const // Inputs
	name         = document.getElementById("name"),
	email        = document.getElementById("email"),
	phone        = document.getElementById("phone"),
	url          = document.getElementById("url"),
	help   	     = document.getElementById("help"),
	company      = document.getElementById("company"),
	timeframe    = document.getElementById("timeframe"),
	budget       = document.getElementById("budget"),
//	Error paragraphs
	// Require input errors
	nameReq      = document.getElementById("nameReq"),
	emailReq     = document.getElementById("emailReq"),
	phoneReq     = document.getElementById("phoneReq"),
	helpReq      = document.getElementById("helpReq"),
	// Invalid input errors
	emailInvalid = document.getElementById("emailInvalid"),
	phoneInvalid = document.getElementById("phoneInvalid"),
	urlInvalid   = document.getElementById("urlInvalid"),
//	Main Error
	vError       = document.getElementById("validationError"),
	// Submit button
	button       = document.getElementById("submitbtn"),
//	Checkboxes
	google       = document.getElementById("google"),
	bing         = document.getElementById("bing"),
	facebook     = document.getElementById("facebook2"),
	linkedin     = document.getElementById("linkedin"),
	instagram    = document.getElementById("instagram2"),
	magazine     = document.getElementById("magazine"),
	radio        = document.getElementById("radio"),
	reco         = document.getElementById("reco"),
	other        = document.getElementById("other"); 

const 
	emailRegExp = /^\W+|\w+@\w{2,10}.\w{2,5}$/; // Email global RegExp
button.addEventListener("click", () => {
	let errorOccured = false;
//	For the first time remove all errors if they are
	vError.style.display = "none";
	nameReq.style.display = "none";
	emailReq.style.display = "none";
	phoneReq.style.display = "none";
	helpReq.style.display = "none";
	emailInvalid.style.display = "none";
	phoneInvalid.style.display = "none";
	urlInvalid.style.display = "none";

// If name input is empty
	if (!name.value) {
	 	nameReq.style.display = "block";
	 	errorOccured = true;
	 }
// If email input is empty or invalid

	if (!email.value) {
		emailReq.style.display = "block";
		errorOccured = true;
	}else {
		if (!emailRegExp.test(email.value)) {
			emailInvalid.style.display = "block";
			errorOccured = true;
		}
	}
//If phone input is empty or not invalid
	const phoneRegExp = /\d{5,15}$/;
	if (phone.value === "") {
		phoneReq.style.display = "block";
		errorOccured = true;
	}else {
		if (!phoneRegExp.test(phone.value)) {
			phoneInvalid.style.display = "block";
			errorOccured = true;
		}
	}
//If URL is not invalid
	const urlRegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	if (url.value) {
		if (!urlRegExp.test(url.value)) {
			urlInvalid.style.display = "block";
			errorOccured = true;
		}
	}
//If "How can we help?" input is empty
	if (!help.value) {
		helpReq.style.display = "block";
		errorOccured = true;
	}
//Check if something invalid or empty
	if (errorOccured) {
		validationError.style.display = 'block';
	}else {
		let consoleInformation = {
			YourName: name.value,
			EmailAddress: email.value,
			PhoneNumber: phone.value,
			CompanyOrganization: company.value,
			WebsiteURL: url.value,
			HowCanWeHelp: help.value
		};
		if (moreInfoOpened) {
			let checkboxes = {
				Google: google.checked,
				Bing: bing.checked,
				Facebook: facebook.checked,
				LinkedIn: linkedin.checked,
				Instagram: instagram.checked,
				Magazine: magazine.checked,
				Radio: radio.checked,
				Recommendation: reco.checked,
				Other: other.checked
			}
			consoleInformation.Timeframe = timeframe.value;
			consoleInformation.Budget = budget.value;
			consoleInformation.CheckboxInformation = checkboxes;
		}
		console.log(consoleInformation);
	}
})

// Controll Submit button margin-top
	const submitbtnDiv = document.getElementsByClassName("button")[0];
window.addEventListener('resize', () => {
	if (window.innerWidth <= 580 && moreInfoOpened) {
		submitbtnDiv.style.margin = "200px auto 5px auto";
		submitbtnDiv.style.textAlign = 'center';
	}else {
		submitbtnDiv.style.margin = "0 auto";
		submitbtnDiv.style.textAlign = 'center';
	}
});

if (window.innerWidth <= 580 && moreInfoOpened) {
		submitbtnDiv.style.margin = "200px auto 5px auto";
		submitbtnDiv.style.textAlign = 'center';
	}else {
		submitbtnDiv.style.margin = "0 auto";
		submitbtnDiv.style.textAlign = 'center';
}


// To Top Button
const toTopButton = document.getElementById("back-to-top");
	
toTopButton.addEventListener("click", () => {
	window.scrollTo(0,0);
})


// Footer Form Validation

const 
//	Submit Button
	footerBtn        = document.getElementsByClassName("footerSubbtn")[0],
//	Errors
	//Required Error
	footerNameReq    = document.getElementById("touchNameError"),
	footerEmailReq   = document.getElementById("footerEmailReq"),
	//Validation Error
	footerEmailError = document.getElementById("footerEmailInvalid"),
//	Inputs
	footerName       = document.getElementById("touchName"),
	footerEmail      = document.getElementById("touchEmail");

footerBtn.addEventListener("click", () => {
	let errorOccured = false;
//	For the first time remove all errors if they are
	footerNameReq.style.display = "none";
	footerEmailReq.style.display = "none";
	footerEmailError.style.display = "none";
// If name input is empty
	if (!footerName.value) {
	 	footerNameReq.style.display = "block";
	 	errorOccured = true;
	 }
// If email input is empty or invalid
	if (!footerEmail.value) {
		footerEmailReq.style.display = "block";
		errorOccured = true;
	}else {
		if (!emailRegExp.test(footerEmail.value)) {
			footerEmailError.style.display = "block";
			errorOccured = true;
		}
	}
//Check if something invalid or empty
	if (!errorOccured) {
		console.log({
			FooterName: footerName.value,
			footerEmail: footerEmail.value
		})
	}
});


//Second Section Animation

const secondSection = document.getElementById("secondSection");
let scrolled        = false;

	if (window.pageYOffset > 300) {
		secondSection.classList.add("secondSection");
				secondSection.style.opacity = '1';
				scrolled = true;
	}

	window.addEventListener("scroll", () => {
		if (!scrolled && window.pageYOffset > 150) {
			secondSection.classList.add("secondSection");
			secondSection.style.opacity = '1';
			scrolled = true;
		}
	})


// File Input Parsing
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#yourPhoto').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});


//Button Animations


//Arrows
const
	firstArrow  = document.getElementById("mainArrow"),
	secondArrow = document.getElementById("secondArrow");


//First Arrow
button.addEventListener("mouseover", () => {
	firstArrow.classList.remove("btnOut");
	firstArrow.classList.add("btnIn");
});
button.addEventListener("mouseout", () => {
	firstArrow.classList.add("btnOut");
	firstArrow.classList.remove("btnIn");
});

//Second Arrow
footerBtn.addEventListener("mouseover", () => {
	secondArrow.classList.remove("btnOut");
	secondArrow.classList.add("btnIn");
});
footerBtn.addEventListener("mouseout", () => {
	secondArrow.classList.add("btnOut");
	secondArrow.classList.remove("btnIn");
});


//CheckBox Styles

const
	googleBefore       = document.getElementById("googleLabel"),
	bingBefore         = document.getElementById("bingLabel"),
	facebookBefore     = document.getElementById("facebook2Label"),
	linkedinBefore     = document.getElementById("linkedinLabel"),
	instagramBefore    = document.getElementById("instagram2Label"),
	magazineBefore     = document.getElementById("magazineLabel"),
	radioBefore        = document.getElementById("radioLabel"),
	recoBefore         = document.getElementById("recoLabel"),
	otherBefore        = document.getElementById("otherLabel"); 

googleBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

bingBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

facebookBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

linkedinBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

instagramBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

magazineBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

radioBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

recoBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})

otherBefore.addEventListener("click", function (){
	this.classList.toggle("checked");
})
