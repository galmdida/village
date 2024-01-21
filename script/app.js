const cradListElements = document.getElementsByClassName("highlight");
const guideParagraphElement = document.getElementById("overlay");
const coverElement = document.getElementById("back-drop");

const closeGuideParagraphElement = document.getElementById("close");

for (var i = 0 ; i < cradListElements.length; i++) {
    cradListElements[i].addEventListener('click' , showAlert , false ) ; 
 }

 closeGuideParagraphElement.addEventListener("click", closeGuide);
 coverElement.addEventListener("click", closeGuide);