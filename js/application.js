


(function() {

// your page initialization code here
window.onload = init;

//Variables
var selectedValue = 'selected';

function init(){
  document.getElementById('next').addEventListener('click', findNextDiv);
  document.getElementById('prev').addEventListener('click', findPrevDiv);
  // document.getElementById("next").onclick = addMovementStates();
}


function findPrevDiv() {
    children = document.getElementById('main-textarea').childNodes;

  _.each(children, function(singleNode) {
    if(singleNode.nodeName === 'DIV') {
      var theOneName = singleNode.className;
      if(theOneName.indexOf(selectedValue) > -1){
        console.log(singleNode.previousSibling);
        var removed = singleNode.className.replace('selected','');
        singleNode.className = removed;
      }
    }
  });
  console.log(children);
  // var el = document.getElementById('div-01').nextSibling,
  // findNextDiv();
  // exitAnimation();
  // var select = document.getElementById("test");

  // var classString = select.className; // returns the string of all the classes for myDiv
  // console.log(classString);
  // var newClass = classString.concat(" animated zoomInLeft"); // Adds the class "main__section" to the string (notice the leading space)
  // select.className = newClass; // sets className to the new string
}

function findNextDiv(){  
    children = document.getElementById('main-textarea').childNodes;

  _.each(children, function(singleNode) {
    if(singleNode.nodeName === 'DIV') {
      console.log(singleNode.className);
      var theOneName = singleNode.className;
      if(theOneName.indexOf(selectedValue) > -1){
        console.log('here',singleNode.nextSibling.nextSibling);
        var removed = singleNode.className.replace('selected','selected prevleaving');
        // var nextDiv = singleNode.nextSibling.nextSibling;
        // console.log('what im looking for',singleNode);
        // var newClass = nextDiv.className.concat(" selected next"); 
        // nextDiv.className = newClass;

        singleNode.className = removed;
      }
    }
  });

    // unable to use the proto unless dom is added to array
    // for (i = 0; i < children.length; i++) { 
    //    console.log('dividing the children', children[i]);
    // }


}
function exitAnimation(){
  
}
})();