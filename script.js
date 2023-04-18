let changeThemeBtn = document.querySelector('#changeBtn');
const header = document.querySelector('header');
let headerEl = document.querySelector('#headerItem');
let mainH1 = document.querySelector('.mainH1');
let body = document.querySelector('body');
let heroSection = document.querySelector('#hero-section')
let contactSection = document.querySelector('#contact-section')
let contactUs = document.querySelector('#contact-us');
let heroText = document.querySelector('.hero-text');
let footer = document.querySelector('footer');
let footerText = document.querySelector('#ftr-txt')
let heroHeader = document.querySelector('.hero-header');

const changeTheme = () => {
    header.style.backgroundColor = 'white';
    changeThemeBtn.style.backgroundColor = 'black';
    changeThemeBtn.style.border = 'none';
    changeThemeBtn.style.color = 'white'
    headerEl.style.color = 'black';
    mainH1.style.color = 'black';
    body.style.backgroundColor = 'white';
    heroSection.style.backgroundColor = 'white';
    contactSection.style.backgroundColor = 'white';
    contactUs.style.color = 'black';
    heroText.style.color = 'black';
    footer.style.backgroundColor = 'white';
    footerText.style.color = 'black';
    heroHeader.style.color = 'black';
}

changeThemeBtn.addEventListener('click', changeTheme);

let contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let nameInput = document.getElementById("sendName");
    let emailInput = document.getElementById("sendEmail");
    let messageInput = document.getElementById("sendMessage");
    
    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    let messageValue = messageInput.value;
    
    console.log("Name: " + nameValue);
    console.log("Email: " + emailValue);
    console.log("Message: " + messageValue);
  });