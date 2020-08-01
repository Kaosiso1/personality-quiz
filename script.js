//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var motherScore = 0;
var siblingScore = 0;
var onlyChildScore = 0;
var fatherScore = 0;
var enableQuestions;



//#TODO: Use the DOM to create variables for the first quiz question.
// variables for answer choice buttons for question 1
var everyDay = document.getElementById("everyDay");
var weekly = document.getElementById("weekly");
var onceAMonth = document.getElementById("onceAMonth");
var iDontWashDishes = document.getElementById("iDontWashDishes");
// variables for answer choice buttons for question 2
var completingChores = document.getElementById("completingChores");
var bothLoungingAroundAndCompletingChores = document.getElementById("bothLoungingAroundAndCompletingChores");
var loungingAround = document.getElementById("loungingAround");
var fixingExteriorIssuesAroundTheHouse = document.getElementById("fixingExteriorIssuesAroundTheHouse");
// variables for answer choice buttons for question 3
var nonexistent = document.getElementById("nonexistent");
var iShareMyPersonalSpace = document.getElementById("iSharemyPersonalSpace");
var perfectIGetALotOfMeTime = document.getElementById("perfectIGetALotOfMeTime");
var iFindSomeTimeToMyself = document.getElementById("iFindSomeTimeToMyself");
var result = document.getElementById("result"); 

//#TODO: Add Event Listeners to your answer choice variables.
everyDay.addEventListener("click", mother);
weekly.addEventListener("click", sibling);
onceAMonth.addEventListener("click", onlyChild);
iDontWashDishes.addEventListener("click", father);

completingChores.addEventListener("click", mother);
bothLoungingAroundAndCompletingChores.addEventListener("click", sibling);
loungingAround.addEventListener("click", onlyChild);
fixingExteriorIssuesAroundTheHouse.addEventListener("click", father);

nonexistent.addEventListener("click", mother);
iShareMyPersonalSpace.addEventListener("click", sibling);
perfectIGetALotOfMeTime.addEventListener("click", onlyChild);
iFindSomeTimeToMyself.addEventListener("click", father);


//#TODO: Define quiz functions here
function mother() {
  motherScore += 1;
  questionCount += 1;
 // alert("A Point to Mother!");
  if (questionCount >=3) {
      updateResult();
  }
}

function sibling() {
  siblingScore += 1;
  questionCount += 1;
  //alert("A Point to Sibling!");
  if (questionCount >=3) {
      updateResult(); 
  }
}

function onlyChild() {
  onlyChildScore += 1;
  questionCount += 1;
 //alert("A Point to Only Child!");
  if (questionCount >=3) {
     updateResult();
  }
}

function father() {
  fatherScore += 1;
  questionCount += 1; 
//alert("A Point to Father!");
  if (questionCount >=3) {
    updateResult();
  }
}

function updateResult(){
  if (motherScore >= 2) {
          result.innerHTML = "Mother!";
  }
  else if (siblingScore >=2) {
           result.innerHTML = "Sibling!";
  } 
  else if (onlyChildScore >=2) {
      result.innerHTML = "Only Child!";
  }
  else if (fatherScore >=2) {
       result.innerHTML = "Father!";
  }
  else {
     result.innerHTML = "Huh...seems like the house is dysfunctional.";
  }
}

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz); 

function restartQuiz() {
  result.innerHTML = "Your result is, drumroll please...";
  questionCount = 0;
  motherScore = 0;
  siblingScore = 0;
  onlyChildScore = 0;
  fatherScore = 0;
  enableQuestions(); 
}