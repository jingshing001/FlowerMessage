

let iconImage = document.querySelectorAll(".iconImg img");


for (var i = 0; i < iconImage.length; i++) {

   iconImage[i].num = i;
   iconImage[i].onmouseover = function () {
      switch (this.num) {
         case 0:

            this.src = '../images/index/LogoIcon/m';
            break;
         case 1:
            this.src = '../images/index/LogoIcon/常見問題02.png';
            break;
         case 2:
            this.src = '../images/index/LogoIcon/購物車02.png';
            break;
         // case 3:
         //    this.src = '../images/index/LogoIcon/搜尋02.png';
         //    break;

      }


   }
   iconImage[i].onmouseout = function () {
      switch (this.num) {
         case 0:

            this.src = '../images/index/LogoIcon/memberOne.png';
            break;
         case 1:
            this.src = '../images/index/LogoIcon/常見問題01.png';
            break;
         case 2:
            this.src = '../images/index/LogoIcon/購物車01.png';
            break;
         // case 3:
         //    this.src = '../images/index/LogoIcon/搜尋01.png';
         //    break;

      }


   }


}


// function add(this){
//     this.target.setAttribute("src","../images/index/LogoIcon/會員中心02.png")
// }

// function remove(e){
//     e.target.setAttribute("src","../images/index/LogoIcon/會員中心01.png");
// }