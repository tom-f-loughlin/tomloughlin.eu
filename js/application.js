$(document).ready(function(){
  
  var flag = false;

$('#next').click(function() {
  var selectedObj = $(".selected");

     selectedObj.removeClass('fadeInLeft');

  selectedObj.addClass('fadeOutLeft');

  setTimeout(function(){
   selectedObj.removeClass('selected fadeOutLeft');

    if(selectedObj.next().length !== 1){
     selectedObj = $("#main-textarea .text-obj").first();
     selectedObj.addClass('selected fadeInRight');
    }
    else{
       selectedObj.next().addClass('selected fadeInRight');
    }
}, 505);

   selectedObj.removeClass('fadeInRight');

});

$('#prev').click(function() {

  var selectedObj = $(".selected");

       selectedObj.removeClass('fadeInRight');


  selectedObj.addClass("fadeOutRight");

  setTimeout(function(){
   selectedObj.removeClass('selected fadeOutRight');
    
    if(selectedObj.prev().length !== 1){
     selectedObj = $("#main-textarea .text-obj").last();
          selectedObj.addClass('selected fadeInLeft');
    }
    else{
      selectedObj.prev().addClass('selected fadeInLeft');
    }

}, 505);

   selectedObj.removeClass('fadeInLeft');
   
});

$('body').on('mousedown', function(e){
  console.log(flag);

  if(flag == true){
      clearInterval(interval);
  }
  else{
    flag = !flag;
  }
});

var interval = setInterval(function(){ $('#next').trigger('click'); }, 8000);

});
