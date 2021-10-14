
   const eyeImg=document.querySelector("#eyeN1");
   const password=document.querySelector("#inputEyen1");

   const eyeImg2=document.querySelector("#eyeN2");
   const password2=document.querySelector("#inputEyen2");

   
   eyeImg.addEventListener('click', function () {

  
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

 
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
