// var button = document.getElementById("get-number");
//
// function getNumber() {
//   alert("Hello World");
//   console.log(button.value);
// }

var numberContainer = document.getElementById("numbers");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;
var numberButtons = document.getElementsByClassName('buttons');
var green = document.getElementById("Green");
var red = document.getElementById("Red");
var wrongaudio = new Audio('snd/correct.mp3');
var correctaudio = new Audio('snd/wrong.mp3');

//counter start at zero
var intervalTimer = 0;


function getNumber(button) {

   clickCounter++;



   numberContainer.innerHTML += button.value;

if(clickCounter == 1){
  numberOne = button.value;
}else if(clickCounter == 2){
  numberTwo = button.value;
}
else {
  numberThree = button.value;
}
  console.log(numberOne);
  console.log(numberTwo);
  console.log(numberThree);

  console.log(clickCounter);
  if(clickCounter == 3){

    for(i=0; i < numberButtons.length; i++) {
      numberButtons[i].setAttribute('disabled', 'disabled');
    }



    console.log("test");
     if (numberOne == 3 && numberTwo == 1 && numberThree == 1){
       var blink = setInterval(function() {

         wrongaudio.play();
       	//add +1 every time the setinterval function runs
       	intervalTimer++;

       	//method to show div on and off
       	//change the css of the green and red box to create a blinking effect
       	if (green.style.visibility == 'hidden') {
       		green.style.visibility = 'visible';
       	}else {
       		green.style.visibility = 'hidden';
       	}

       	//check if the interval has runned ten times
       	if(intervalTimer == 100) {

       		//ClearInterval function stops the interval after 10 times
       		clearInterval(blink);

       	}

       }, 50);
       setTimeout(function () { location.reload(true); }, 5000);
      }else{

      setTimeout(function () { location.reload(true); }, 5000);
      var blink = setInterval(function() {

        correctaudio.play();


       //add +1 every time the setinterval function runs
       intervalTimer++;

       //method to show div on and off
       //change the css of the green and red box to create a blinking effect
       if (red.style.visibility == 'hidden') {
         red.style.visibility = 'visible';
       }else {
         red.style.visibility = 'hidden';
       }

       //check if the interval has runned ten times
       if(intervalTimer == 100) {

         //ClearInterval function stops the interval after 10 times
         clearInterval(blink);

       }

      }, 50);

    }

  }



}
