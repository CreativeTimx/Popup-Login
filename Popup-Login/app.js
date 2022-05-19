const loginBtn = document.querySelector('#login-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', () => {
    popup.classList.add('active');
    
})
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
})