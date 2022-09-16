var readlineSync = require("readline-sync");


var score = 0;

var highScore = { HS: 3 };

var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+ userName +" DO YOU KNOW Sai Kiran?")

var highScores = [
  {
    name: "Kiran",
    score: 3,
  },

  {
    name: "Sai",
    score: 2,
  },
]

var questions = [
  {
    
    question:
      'What is the largest of the seven continents?',
    answer: 'Asia',
  },
  {
    
    question:
      'Which of these islands is a part of the Australian continent?',
    answer: 'Tasmania',
  },
  {
    
    question: ' What is the world"s most populous country?',
    answer: 'China',
  },
  {
    
    question: 'What country is the world"s top travel destination?',
    answer: 'France',
  },
  {
    
    question: 'What country has won the most Winter Olympic Medals?',
    answer: 'Norway',
  },
];





function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score = score + 1;
    console.log("right!");
  }
  else{
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------")
}


// function showScores() {
//   console.log("YAY! You SCORED: ", score);

//   console.log("Check out the high scores");

//   highScores.map(score => console.log(score.name, " : ", score.score))
// }


for(var i=0;i<questions.length;i++){
  var currQuestion = questions[i];
  play(currQuestion.question,currQuestion.answer);
}


if (highScore.HS > score) {
  console.log("You score is less than highscore" + "\n" + "Highscore: " + highScore.HS + "\n" + "Your Score: " + score)
} else if (highScore.HS == score) {
  console.log("----------------------------------------------")
  console.log("your score is equal to Highscore: " + score)
} else if (highScore.HS < score) {
  console.log("Yipee!! You beat the Highscore" + "\n" + "Your Score: " + score + "");
}



