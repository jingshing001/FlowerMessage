let calendarBtn = document.getElementById('calendarBtn');
let calendar = document.getElementById('calendar');
let allContent = document.getElementById('allContent');
let mask = document.getElementById('mask');
let chdate = document.querySelectorAll('#calendar table tr td span');
let datetext = document.getElementById('datetext');

calendarBtn.addEventListener('click', () => {
    calendar.classList.remove('hidden');
    allContent.classList.add('blur');
    mask.classList.add('mask');
})

mask.addEventListener('click', () => {
    calendar.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
})

let date = chdate[0].innerHTML;
datetext.innerHTML = '05/' + date;

for (i = 0; i <= 3; i++) {
    (function (x) {
        chdate[x].addEventListener('click', () => {
            calendar.classList.add('hidden');
            allContent.classList.remove('blur');
            mask.classList.remove('mask');
            if (x < 3) {
                let date = chdate[x].innerHTML;
                datetext.innerHTML = '05/' + date;
            } else {
                let date = chdate[x].innerHTML;
                datetext.innerHTML = '06/0' + date;
            }
        });
    })(i);
}

// 金額按鈕變化
let btnsPrice = document.querySelectorAll('.btnsPrice');
for (let i = 0; i <= 2; i++) {
    btnsPrice[i].addEventListener('click', () => {
        btnsPrice[i].classList.add('btnVisited');
        if (i == 0) {
            btnsPrice[1].classList.remove('btnVisited');
            btnsPrice[2].classList.remove('btnVisited');
        }else if(i == 1){
            btnsPrice[0].classList.remove('btnVisited');
            btnsPrice[2].classList.remove('btnVisited');
        }else{
            btnsPrice[0].classList.remove('btnVisited');
            btnsPrice[1].classList.remove('btnVisited');
        }
    })
}