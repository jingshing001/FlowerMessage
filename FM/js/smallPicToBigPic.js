const Picimg=document.querySelectorAll(".Picimg");


for(let i=0 ;i<Picimg.length;i++){
  Picimg[i].addEventListener('click',function(){
    
      const imgsrc=this.getAttribute('src');
      Picimg[0].src=imgsrc;
     
      let index=i;
   
   
      if(Picimg[index]!=Picimg[0] ) {
          Picimg[i].classList.add('inputOp');
       }
       
    if(Picimg[index].classList.contains('inputOp')){
          if(index==1){ 
            // Picimg[0].classList.add('fadeInOut')
            // setTimeout(()=>{ Picimg[0].classList.remove('fadeInOut')},500);
            Picimg[index+1].classList.remove('inputOp')
            Picimg[index+2].classList.remove('inputOp')
           }

           if(index==2){
             Picimg[index-1].classList.remove('inputOp');
             Picimg[index+1].classList.remove('inputOp');
              
           }
               
           if(index==3){
             Picimg[index-1].classList.remove('inputOp');
             Picimg[index-2].classList.remove('inputOp');
            }
          }
          
        });
        }
               
         
  
            
        
            
           

          
       
        
   
         
  
  
  
  

