let product01 = document.getElementById('product01');
let product02 = document.getElementById('product02');
let result01 = document.getElementById('result01');
let result02 = document.getElementById('result02');
let result03 = document.getElementById('result03');

let tutal=product01.value*480+product02.value*680


result01.innerHTML=product01.value*480;
result02.innerHTML=product02.value*680;
result03.innerHTML=Thousands(tutal);

//千分位
function Thousands(num){
    let newNum= String(num).split('').reverse().reduce((p,n,index)=>{
            return index%3 ? n+''+p : n+','+p; 
     });
     return newNum;
}

//input數量監聽
product01.addEventListener('change',function(){
        tutal=product01.value*480+product02.value*680
        result01.innerHTML=Thousands(product01.value*480);
        result03.innerHTML=Thousands(tutal)
})

//input數量監聽
product02.addEventListener('change',function(){
        tutal=product01.value*480+product02.value*680
        result02.innerHTML=Thousands(product02.value*680);
        result03.innerHTML=Thousands(tutal);
})









// 刪除按鈕
let deleteBtn = document.getElementsByClassName('deleteBtn');
let deleteAlert = document.getElementById('deleteAlert');
let allContent = document.getElementById('allContent');
let retu = document.getElementById('retu');
let yes = document.getElementById('yes');
let mask = document.getElementById('mask');
let deleteBtnArray=[...deleteBtn];



//移除遮罩
function removeMask(){
    deleteAlert.classList.add('hidden');
    allContent.classList.remove('blur');
    mask.classList.remove('mask');
}

//增加遮罩
function addMask(){
    deleteAlert.classList.remove('hidden');
    allContent.classList.add('blur');
    mask.classList.add('mask');
}


//移除表格
function deleteList(){
    yes.addEventListener('click',()=>{
        this.parentElement.parentElement.remove();
        removeMask();
        console.dir(this);
})
}

//刪除圖示監聽
deleteBtnArray.forEach((v,index)=>{
    v.addEventListener('click',function(){
        addMask();
        deleteList.call(v);
        console.log(index);
        if(index==0){
            tutal=tutal-product01.value*480
            result03.innerHTML=tutal
        }else{
            tutal=tutal-product02.value*680
            result03.innerHTML=tutal
        }
    })
})


retu.addEventListener('click',function(){
    removeMask();
})

mask.addEventListener('click',function(){
    removeMask();
})