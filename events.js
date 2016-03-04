//build event listener fuction for clicked sections contained in the
//article array and return to the DIV the article section 
function youClickedMe(addEventListener){
  document.getElementById("output-target").innerHTML = "you clicked on the " + event.target.innerHTML;
 }; 

//pull from the DOM and populate a varible for all the child elemnts of the
//article, loop through the length of the array and add click event handlers on 
//those sections
var articleSection = document.getElementsByClassName("article-section"); 
for (i=0; i < articleSection.length; i++) {
  articleSection[i].addEventListener("click", youClickedMe, false);
}

//Grab the H1 element from the DOM and on mouse movement onto or off the element
//write a message to the output div
var mouseMove = document.getElementById("page-title");

//The mousemove event is fired when a pointing device (usually a mouse) 
//is moved while over an element.
mouseMove.addEventListener("mouseover", function(event){
    document.getElementById("output-target").innerHTML  = "You moved your mouse over the header";
});

//The mouseout event is fired when a pointing device (usually a mouse) 
//is moved off the element that has the listener attached or off one of its children.
mouseMove.addEventListener("mouseout", function(event){
  document.getElementById("output-target").innerHTML  = "You left me!!";
});

//add event listener on the input box so that text entered is written as it is typed to the 
//output div
var inputBox = document.getElementById("keypress-input");

inputBox.addEventListener("input", function(event){
   document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value ;
});