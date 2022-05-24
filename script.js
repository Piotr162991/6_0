(function () {
  ex1_button.addEventListener("click",function(){
    ex1_content.innerHTML = "1 2 3 4 5 6 7 8 9"
  })
    
        ex2_text.querySelector("phone number")
        
        ex2_text.addEventListener('input', function (){
          if(ex2_text.lenght==9)
          
          {
            ex2_content.innerHTML = "dobry numer";
          }
          else{
            ex2_content.innerHTML = "zły numer";
          }
        });
  /*ex2_text.addEventListener("text",s)
  
  function s()
  {
    ex2_text.InputEvent("",function(){
      if(ex2_text.lenght==9)
    {
      ex2_content.innerHTML = "dobry numer"
    }
    else {
      ex2_content.innerHTML = "zły numer"
    }
    })
    
      
    
  }*/
})();