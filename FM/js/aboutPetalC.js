
let petal1=document.getElementById("petal1")
let petal2=document.getElementById("petal2")
let petal3=document.getElementById("petal3")
let petal4=document.getElementById("petal4")

checkbox.addEventListener('change', () => {

    if (changeColor.classList.contains("dark")) {
      petal4.src="../images/abu-flower12.png"
      
    } else {
        petal4.src="../images/abu-flower02.png"
    }
})