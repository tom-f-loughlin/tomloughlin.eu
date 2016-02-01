


(function() {
   // your page initialization code here
   // the DOM will be available here

window.onload = init;
function init(){

  document.getElementById('next').addEventListener('click', findNextDiv);
  document.getElementById('prev').addEventListener('click', findPrevDiv);

  // document.getElementById("next").onclick = addMovementStates();
}


function findPrevDiv() {
  var children = document.getElementById('main-textarea').childNodes;


  var test = _.pluck(children, 'div.text-obj');
  console.log(test);
  // _.each(children, function(singleNode) {
  //   if(singleNode.nodeName === 'DIV') {
  //     console.log(singleNode);
  //   }
  // });
  console.log(children)
  // var el = document.getElementById('div-01').nextSibling,
  // findNextDiv();
  // exitAnimation();
  // var select = document.getElementById("test");

  // var classString = select.className; // returns the string of all the classes for myDiv
  // var newClass = classString.concat(" animated zoomInLeft"); // Adds the class "main__section" to the string (notice the leading space)
  // select.className = newClass; // sets className to the new string
}
var testingArray  = [];

function findNextDiv(){
  // var select = document.getElementById("test");
    var children = document.getElementById('main-textarea').childNodes;
    var selected = document.getElementsByClassName('selected');
    console.log(selected);
  
    var nextObj = selected[0].nextElementSibling;

    console.log(nextObj);

    // unable to use the proto unless dom is added to array
    // for (i = 0; i < children.length; i++) { 
    //    console.log('dividing the children', children[i]);
    // }

//     _.each(children, function(singleNode) {
//     if(singleNode.nodeName === 'DIV') {
//         console.log(singleNode);

//         testingArray.push(singleNode);
//       }
//     });
// console.log(testingArray);
  // var selected =  document.getElementsByClassName("selected");
  // console.log(selected.nextSibling)
  // var classString = selected.className;
  // selected.className = newClass;

}
function exitAnimation(){
  
}
})();