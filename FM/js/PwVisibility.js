
   const eyeImg=document.querySelector("#eyeN1");
   const password=document.querySelector("#inputEyen1");

   const eyeImg2=document.querySelector("#eyeN2");
   const password2=document.querySelector("#inputEyen2");

   //使用監聽抓取事件,如果eye圖片被點擊將會觸發事件
   eyeImg.addEventListener('click', function () {

   //使用文件物件模塊的方法getAttribute抓取password屬性的值
   //利用三元運算符判斷 'type'的值是否為password 如果是則把'text'存入變數 const type 不是則存入password
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

   //利用setAttribute設置屬性
   // 第一個參數為你要設置的屬性
   // 第二個參數為給的值
   password.setAttribute('type', type);
 
   //利用type判定值為哪個如果type==text那就是TRUE則切換為eyeOpen這張圖片,反之則切換為eyeClose
    if( type==='text'){
        eyeImg.src="images/index/LogoIcon/eye-open.png"
    }else{
       eyeImg.src="images/index/LogoIcon/eye-close.png"
    }

    });
    
   eyeImg2.addEventListener('click', function () {

   const type2 = password2.getAttribute('type') === 'password' ? 'text' : 'password';
   password2.setAttribute('type',type2);
  
   if( type2==='text'){
      eyeImg2.src="images/index/LogoIcon/eye-open.png"
      }else{
         eyeImg2.src="images/index/LogoIcon/eye-close.png"
      }
  
    });
