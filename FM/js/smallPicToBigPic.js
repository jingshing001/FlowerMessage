const Picimg=document.querySelectorAll(".Picimg");



//綁定監聽
Picimg.forEach((pic,index)=>{
   
    pic.addEventListener('click',function(){
      
      const imgsrc=this.getAttribute('src');
      
      //圖片是小圖進入執行
      if(index){
      clearClassName();
      this.className='img-fluid Picimg inputOp'  
      
      setTimeout(()=>{
        this.ownerDocument.images[5].src=imgsrc;  
        this.ownerDocument.images[5].style=`opacity:1;transition:0.1s` ;     
       
      },100);
      
   }
    })
})

//清除類別名
function clearClassName(){ 
 
  Picimg.forEach((pic,index)=>{
        if(!index){
        pic.style='opacity:0;transition:0.1s';
      }
        pic.className='img-fluid Picimg';
  })
}

  
  //購買數量
  let groupbtn=document.querySelectorAll('.btn-group button');
  let count=0
  
  groupbtn[1].innerHTML=0;      

  groupbtn[0].addEventListener('click',function(){
        count--
        groupbtn[1].innerHTML=count;
        if(count==0){
          groupbtn[0].disabled=true; 
        }
  })
 
  groupbtn[2].addEventListener('click',function(){
        count++
        groupbtn[1].innerHTML=count;
        if(count>=1){
          groupbtn[0].disabled=false; 
        }
  })
             
            
           

          
       
        
   
         
  
  
  
  

