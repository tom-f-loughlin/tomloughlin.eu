


(function() {
   // your page initialization code here
   // the DOM will be available here

window.onload = init;
function init(){

  document.getElementById('next').addEventListener('click', addMovementStates);

  // document.getElementById("next").onclick = addMovementStates();
}


function addMovementStates() {
  var children = document.getElementById('main-textarea').childNodes;

  _.each(children, function(singleNode) {
    if(singleNode.nodeName === 'DIV') {
      console.log(singleNode);
    }
  });
  console.log(children)
  // var el = document.getElementById('div-01').nextSibling,
  // findNextDiv();
  // exitAnimation();
  // var select = document.getElementById("test");

  // var classString = select.className; // returns the string of all the classes for myDiv
  // var newClass = classString.concat(" animated zoomInLeft"); // Adds the class "main__section" to the string (notice the leading space)
  // select.className = newClass; // sets className to the new string
}

function findNextDiv(){
  // var select = document.getElementById("test");
  var selected =  document.getElementsByClassName("selected");
  console.log(selected.nextSibling)
  var classString = selected.className;
  selected.className = newClass;

}
function exitAnimation(){
  
}
})();