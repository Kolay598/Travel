const alaskaL=document.querySelector("#meow5")
const alaskaR=document.querySelector("#meow6")
window.addEventListener("scroll", function(event){
    console.log(scrollY)
   if (scrollY>2300){
      alaskaL.style.transform="translateX(-100px)"
      alaskaR.style.transform="translateX(100px)"
   }
   if (scrollY>2600){
      alaskaL.style.transform="translateX(0)"
      alaskaR.style.transform="translateX(0)"
         }
})

const japanImg=document.querySelectorAll("#Japan img")
const japanTxt=document.querySelector("#Japan div")
window.addEventListener("scroll", function(event){
   if (scrollY>3000){
      japanImg[0].style.transform="scale(1.2)"
      japanImg[1].style.transform="scale(1.2)"
      japanTxt.style.transform="skewY(10deg)"
   }
   if (scrollY>3200){
      japanImg[0].style.transform="scale(1)"
      japanImg[1].style.transform="scale(1)"
      japanTxt.style.transform="skewY(0)"
         }    
})