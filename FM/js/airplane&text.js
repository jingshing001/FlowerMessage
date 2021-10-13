// 滾軸離上方多少距離，觸發效果啟動
let textenter = document.querySelectorAll('#aboutcontent span');
document.addEventListener('scroll', (e) => {
   let top = document.documentElement.scrollTop;
   if (top >= 250) {
      for (i = 0, t = 0; i < textenter.length; i++, t += 200) {
         // 第一格要使用引號包起來，但會將原本須帶入的變數一起包住，造成無法讀取for迴圈的i值，所以有兩種寫法
         //第一種："textenter["+i+"].classList.add('textenter')"
         //第二種用ES6的模板字串符 template literal，如下：
         setTimeout(`textenter[${i}].classList.add('textenter')`, t);
      }
      imgplane01.classList.add('flyeff01');
      imgplane02.classList.add('flyeff02');
   }
})


// 按鈕點擊後，主題色彩、LOGO、按鈕顏色產生變化
const checkbox = document.getElementById('checkbox');
let changeColor = document.getElementById("changeColor");
let logo1 = document.getElementById("logo1");
let logo2 = document.getElementById("logo2");
let imgplane01 = document.getElementById("imgplane01");
let imgplane02 = document.getElementById("imgplane02");
let label = document.getElementById("label");
let ftIcon01= document.getElementById("ftIcon01");
let ftIcon02 = document.getElementById("ftIcon02");
let ftIcon03 = document.getElementById("ftIcon03");

checkbox.addEventListener('change', () => {
   changeColor.classList.toggle("dark");
   changeColor.classList.toggle("navColor");
   changeColor.classList.toggle("changeFci");

   if (changeColor.classList.contains("dark")) {
      logo1.src = "images/index/LogoIcon/logo-w.png";
      imgplane01.src = "images/index/LogoIcon/plane-w.png";
      imgplane02.src = "images/index/LogoIcon/plane-w.png";
      ftIcon01.src="images/index/LogoIcon/w-fb.png"
      ftIcon02.src="images/index/LogoIcon/w-ig.png"
      ftIcon03.src="images/index/LogoIcon/w-twitter.png"
   } else {
      logo1.src = "images/index/LogoIcon/logo-b.png";
      imgplane01.src = "images/index/LogoIcon/plane-b.png";
      imgplane02.src = "images/index/LogoIcon/plane-b.png";
      ftIcon01.src="images/index/LogoIcon/b-fb.png"
      ftIcon02.src="images/index/LogoIcon/b-ig.png"
      ftIcon03.src="images/index/LogoIcon/b-twitter.png"
   }
})


ballt.addEventListener('change', () => {
   changeColor.classList.toggle("dark");
   changeColor.classList.toggle("navColor");
   changeColor.classList.toggle("changeFci");

   if (changeColor.classList.contains("dark")) {
       logo1.src = "../images/index/LogoIcon/logo-w.png";
       ftIcon01.src="../images/index/LogoIcon/w-fb.png"
       ftIcon02.src="../images/index/LogoIcon/w-ig.png"
       ftIcon03.src="../images/index/LogoIcon/w-twitter.png"

   } else {
       logo1.src = "../images/index/LogoIcon/logo-b.png";
       ftIcon01.src="../images/index/LogoIcon/b-fb.png"
       ftIcon02.src="../images/index/LogoIcon/b-ig.png"
       ftIcon03.src="../images/index/LogoIcon/b-twitter.png"
   }
})