var elements = document.getElementsByClassName('card'); 

function MouseOver()   {
   var elements = document.getElementsByClassName('card'); 
   elements.mouseIsOver = false;

   elements.onmouseover = function()   {
      this.mouseIsOver = true;
   };
   elements.onmouseout = function()   {
      this.mouseIsOver = false;
   }
   elements.onclick = function()   {
      if (this.mouseIsOver)   {
         element.className = 'card-white';   
      }
   }
}