const words = [
    "dependent", "dog", "superficial", "admit", "juice",
    "javascript", "developer", "airplane", "great", "fun",
    "manipulate", "cat", "transition", "school", "computer",
    "programming", "drag", "loving", "north", "access", "phantom", "vacation", "accommodate", "liaison",
  ];

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
    //Random index
    const randomWord = Math.floor(Math.random() * words.length);
    //Select a word from the array using randomWord
    const selectedWord = words[randomWord];
    //Display selected word
    wordContainer.innerText = selectedWord;

}

function updateScore(){
    //Updates the score with 1
     score ++;     
    //Displays the score in  scorecontainer
    scoreContainer.innerText = score;

}

function updateTime(){
    time--; //räknar ner med en sekund
    timeContainer.innerText = `${time}s`;
    if (time === 0){
        clearInterval(timer);
        gameOver();
    }
    }


function gameOver() {
    input.disabled = true;
    clearInterval(timer);
    endGameContainer.innerHTML = `Time ran out! Your final score is ${score}`;
    endGameContainer.style.display = 'flex';
}


// Add an event listener to the text element. When you type in the correct word, the function should: 
//     • update score 
//     • give the user a new word 
//     • increment time by 5 seconds 
//     • reset the input to empty string

text.addEventListener("input", function(e) {
    const typedWord = e.target.value;
    const currentWord = wordContainer.innerText;
    

    if (typedWord === currentWord){
    updateScore();
    addWordToDOM(); 
    e.target.value = "";
    time +=5;
    }
})


 function startGame() {
    score = 0;
    time = 10;
    scoreContainer.innerText = score;
    timeContainer.innerText = `${time}s`;
    addWordToDOM();

     // Start the timer
    timer = setInterval(updateTime, 1000);
 }


 // Initialize the game on page load
window.onload = startGame;


