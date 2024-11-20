//This is a word typing game. User has 10 seconds to type the random word that appears
// if the word is typed correctly, it increases the score by 1 and increases time by 5 seconds.
// If the word is typed incorrectly, timer keeps decreasing by 1 second until it reaches 0 and then 
//its game over. 

//Random words
const words = [
    "dependent", "dog", "superficial", "admit", "juice",
    "javascript", "developer", "airplane", "great", "fun",
    "manipulate", "cat", "transition", "school", "computer",
    "programming", "drag", "loving", "north", "access", "phantom", "vacation", "accommodate", "liaison",
  ];

  //DOM elements
  const timeContainer = document.getElementById("time");
  const scoreContainer = document.getElementById("score");
  const input = document.getElementById("text");
  const endGameContainer = document.getElementById("end-game-container");
  const wordContainer = document.getElementById("word");

  //Variables
  let time = 10; 
  let score = 0; 
  let timer;

  //Function that selects a random word from the array
function addWordToDOM(){
    //Selects a random word from the array using Math.random and Math.floor methods. 
    //Math.random returns a random number between 0 and 1. Math.floor rounds down the number to the nearest integer.
    //it multiplies the result by the length of the array to get a random word from the array.
    const randomWord = Math.floor(Math.random() * words.length);
    
    //uses const randomword to display the word in the wordContainer
    const selectedWord = words[randomWord];
    //selected word is displayed in the wordContainer
    wordContainer.innerText = selectedWord;

}

function updateScore(){
    //Updates the score with 1
     score ++;     
    //Displays the score in  scorecontainer
    scoreContainer.innerText = score;

}

function updateTime(){
    time--; //Counting down with one second.
    timeContainer.innerText = `${time}s`; //Updates the time in timeContainer
    if (time === 0){ //Checks if time is zero
        clearInterval(timer); //Stops the timer
        gameOver(); //Calls the gameOver function 
    }
    }

function gameOver() { //game-over function that activates when timer get to zero 
    input.disabled = true; //disables input field so that user cannot type any more words
    clearInterval(timer); //is used to stop an interval that was previously set with updateTime-function.
    endGameContainer.innerHTML = `Time ran out! Your final score is ${score}`; //displays message showing final score
    endGameContainer.style.display = 'flex'; //Makes the endGameContainer visible
}


//Function below: adds an eventlistener to the text element. When you type in the correct word
// the function updates the score, gives the user a new word, increments the time by 5 sec and 
//reset the input to empty string

text.addEventListener("input", function(e) { 
    const currentWord = wordContainer.innerText;    

    if (typedWord === currentWord){ //updates score
    updateScore(); //updates score by calling updateScore function
    addWordToDOM(); //add new word by calling addWordToDOM
    e.target.value = ""; //reset input field
    time +=5; //increase time by 5 sec by calling updateTime function
    }
})
//Function starts the game

 function startGame() { //start the game by calling startGame function
    score = 0; //reset score to 0 by calling updateScore function
    time = 10; //increase time by 10 sec by calling updateTime function
    scoreContainer.innerText = score; //displays the score in scoreContainer by calling updateScore function
    timeContainer.innerText = `${time}s`; //displays the time in timeContainer by calling updateTime function
    addWordToDOM(); //adds new word

     // Start the timer
    timer = setInterval(updateTime, 1000);
 }


 // Initialize the game on page load
window.onload = startGame;


