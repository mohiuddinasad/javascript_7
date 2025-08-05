let menu = document.querySelector('.menu');
let sideBar = document.querySelector('.side_bar');
let cross = document.querySelector('.close');

menu.addEventListener('click', () => {
    sideBar.classList.add('active');
});

cross.addEventListener('click', () => {
    sideBar.classList.remove('active');
});
sideBar.addEventListener("click" , function(){
    sideBar.classList.remove('active');
})