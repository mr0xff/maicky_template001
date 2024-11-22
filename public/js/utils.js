onload = ()=>{
  let mn = document.getElementById("menu-vertical")
  document.getElementById("btnmenu").addEventListener("click", function(){
      mn.style.transform = "translateY(0%)"    
  })
  document.getElementById("btnclose").addEventListener("click", function(){
      mn.style.transform = "translateY(-100%)"    
  })
}