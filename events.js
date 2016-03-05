//build event listener fuction for clicked sections contained in the
//article array and return to the DIV the article section 
//target is the element in the DOM you have clicked on
function youClickedMe(addEventListener){
  console.log(addEventListener);
  document.getElementById("output-target").innerHTML = "you clicked on the " + event.target.innerHTML;
 }; 

//pull from the DOM and populate a varible for all the child elemnts of the
//article, loop through the length of the array and add click event handlers on 
//those sections
var articleSection = document.getElementsByClassName("article-section"); 
console.log("articleSection", articleSection);
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

//Add button listeners
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

var guineaPig = document.getElementById("guinea-pig");

var colorButton = document.getElementById("add-color");
var hulkButton = document.getElementById("make-large");
var captureButton = document.getElementById("add-border");
var roundedButton = document.getElementById("add-rounding");


//uppon click of the color button set the div blue
colorButton.addEventListener("click", function(){
  guineaPig.classList.toggle("color");
  console.log("colorbuttonPress", event);
});

hulkButton.addEventListener("click", function(){
  guineaPig.classList.toggle("hulk");
  console.log("Hulkify",event );
});

captureButton.addEventListener("click", function() {
    guineaPig.classList.toggle("wrap");  
});

roundedButton.addEventListener("click", function() {
    guineaPig.classList.toggle("round");  
});

//The first section's text should be bold.
articleSection[0].classList.add("boldSection");

//The last section's text should be bold and italicized.
articleSection[articleSection.length-1].classList.add("lastSection")


//buttons should appear as block elements
var buttons = document.getElementsByTagName("button");

buttonsToBlock(buttons); 

function buttonsToBlock(buttons) {
  for (var i = 0; i , buttons.length; i++){
    buttons[i].classList.add("blockButton");
  }
};


 

