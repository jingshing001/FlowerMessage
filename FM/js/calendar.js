let calendarBtn = document.getElementById('calendarBtn');
let calendar = document.getElementById('calendar');
let allContent = document.getElementById('allContent');
let mask = document.getElementById('mask');
let chdate = document.querySelectorAll('#calendar table tr td span');
let datetext = document.getElementById('datetext');


//日期圖示監聽
calendarBtn.addEventListener('click', () => {
    calendar.classList.remove('hidden');
    allContent.classList.add('blur');
    mask.classList.add('mask');
})

//遮罩監聽
mask.addEventListener('click', () => {
    calendar.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
})


//變換日期
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
btnsPrice.forEach((price)=>{
        price.addEventListener('click',function(){
            removeClass()
            this.classList.add('btnVisited');
        })
    })


//清除類別
function removeClass(){
btnsPrice.forEach((v)=>{
    v.classList.remove('btnVisited')
})
}