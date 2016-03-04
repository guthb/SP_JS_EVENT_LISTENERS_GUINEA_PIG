//build event listener fuction for clicked sections contained in the
//article array and return to the DIV the article section 
function youClickedMe(addEventListener){
  console.log("Article", event.target.innerHTML);
  document.getElementById("output-target").innerHTML = "you clicked on the " + event.target.innerHTML;
 }; 
 


//pull from the DOM and populate a varible for all the child elemnts of the
//article, loop through the length of the array and add click event handlers on 
//those sections
var articleSection = document.getElementsByClassName("article-section"); 
for (i=0; i < articleSection.length; i++) {
  articleSection[i].addEventListener("click", youClickedMe, false);
}




