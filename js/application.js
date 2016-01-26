


(function() {
   // your page initialization code here
   // the DOM will be available here

window.onload = init;
function init(){

  document.getElementById("next").onclick = addMyClass();
}


function addMyClass() {

  var select = document.getElementById("test");

  var classString = select.className; // returns the string of all the classes for myDiv
  var newClass = classString.concat(" animated zoomInLeft"); // Adds the class "main__section" to the string (notice the leading space)
  select.className = newClass; // sets className to the new string
}

})();