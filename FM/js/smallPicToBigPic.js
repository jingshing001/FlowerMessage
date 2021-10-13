const Picimg=document.querySelectorAll(".Picimg");
Picimg.style='width:1000px'

Picimg.forEach((pic,index)=>{
   
    pic.addEventListener('click',function(){
      
      const imgsrc=this.getAttribute('src');
      if(index){
      clearClassName();
      this.className='img-fluid Picimg inputOp'  
      
      setTimeout(()=>{
        this.ownerDocument.images[5].src=imgsrc;  
        this.ownerDocument.images[5].style=`opacity:1;transition:0.1s` ;     
       
      },100);
        

      // setInterval(()=>{
      //   for(let i=0;i<=1;i+=0.01){
      //   this.ownerDocument.images[5].style=`opacity:${i};`
      // }
      // },1000)  
    
      
      
   }
    })
})
  
function clearClassName(){ 
 
  Picimg.forEach((pic,index)=>{
        if(!index){
        pic.style='opacity:0;transition:0.1s';
      }
        pic.className='img-fluid Picimg';
  })
}


         

  
            
        
            
           

          
       
        
   
         
  
  
  
  

