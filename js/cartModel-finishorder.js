let cancelBtn = document.getElementById('cancelBtn');
let cancelAlert = document.getElementById('cancelAlert');
let allContent = document.getElementById('allContent');
let retu = document.getElementById('retu');
let yes = document.getElementById('yes');
let cartlist01 = document.getElementById('cartlist01');
let mask = document.getElementById('mask');

cancelBtn.addEventListener('click', () => {
    cancelAlert.classList.remove('hidden');
    allContent.classList.add('blur');
    mask.classList.add('mask');
})

retu.addEventListener('click', () => {
    cancelAlert.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
})

yes.addEventListener('click', () => {
    cancelAlert.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
    cartlist01.remove();
})

mask.addEventListener('click', () => {
    cancelAlert.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
})