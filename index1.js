// Math Object
// var randomNum;
var doneArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var score = 0;
var correct = 0;
var incorrect = 0;
var beginSound = new Audio("sound/begin.mp3");
var yesSound = new Audio("sound/yes.mp3");
var noSound = new Audio("sound/no.mp3");

function shuffle(array) {
    for(var  i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // random number for j
        [array[i], array[j]] = [array[j], array[i]] // swaps array[i] and array[j]
    }
}

function begin() {
    document.querySelector(".start").classList.add("invisible");
    document.querySelector(".intro-word").classList.add("invisible");
    beginSound.play();
    // show quesiton
    shuffle(doneArr);
    displayQ1();
}

function displayQ1() {
    if(doneArr[0] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[0] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[0] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[0] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[0] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[0] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[0] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[0] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[0] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[0] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[0] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[0] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[0] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[0] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[0] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

 function wrongQ1() {
    noSound.play();  
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 0) {
        displayQ2();
    } else if(doneArr[1] === 0) {
        displayQ3();
    } else if(doneArr[2] === 0) {
        displayQ4();
    } else if(doneArr[3] === 0) {
        displayQ5();
    } else if(doneArr[4] === 0) {
        displayQ6();
    } else if(doneArr[5] === 0) {
        displayQ7();
    } else if(doneArr[6] === 0) {
        displayQ8();
    } else if(doneArr[7] === 0) {
        displayQ9();
    } else if(doneArr[8] === 0) {
        displayQ10();
    } else if(doneArr[9] === 0) {
        displayQ11();
    } else if(doneArr[10] === 0) {
        displayQ12();
    } else if(doneArr[11] === 0) {
        displayQ13();
    } else if(doneArr[12] === 0) {
        displayQ14();
    } else if(doneArr[13] === 0) {
        displayQ15();
    } else if(doneArr[14] === 0) {
        document.querySelector(".question").innerHTML = "<h1 class='h1'>Thank you for playing!</h1><br><br><p class='qp'>Your Score: " + score +"</p><br><br><p class='qp'>Correct: " + correct + "</p><br><br><p class='qp'>Incorrect: "+ incorrect + "</p>";
    } 
}

function pointQ1(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 0) {
        displayQ2();
    } else if(doneArr[1] === 0) {
        displayQ3();
    } else if(doneArr[2] === 0) {
        displayQ4();
    } else if(doneArr[3] === 0) {
        displayQ5();
    } else if(doneArr[4] === 0) {
        displayQ6();
    } else if(doneArr[5] === 0) {
        displayQ7();
    } else if(doneArr[6] === 0) {
        displayQ8();
    } else if(doneArr[7] === 0) {
        displayQ9();
    } else if(doneArr[8] === 0) {
        displayQ10();
    } else if(doneArr[9] === 0) {
        displayQ11();
    } else if(doneArr[10] === 0) {
        displayQ12();
    } else if(doneArr[11] === 0) {
        displayQ13();
    } else if(doneArr[12] === 0) {
        displayQ14();
    } else if(doneArr[13] === 0) {
        displayQ15();
    } else if(doneArr[14] === 0) {
        document.querySelector(".question").innerHTML = "<h1 class='h1'>Thank you for playing!</h1><br><br><p class='qp'>Your Score: " + score +"</p><br><br><p class='qp'>Correct: " + correct + "</p><br><br><p class='qp'>Incorrect: "+ incorrect + "</p>";
    } 
}

function displayQ2() {
    if(doneArr[1] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[1] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[1] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[1] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[1] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[1] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[1] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[1] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[1] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[1] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[1] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[1] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[1] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[1] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[1] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ2() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 1) {
        displayQ2();
    } else if(doneArr[1] === 1) {
        displayQ3();
    } else if(doneArr[2] === 1) {
        displayQ4();
    } else if(doneArr[3] === 1) {
        displayQ5();
    } else if(doneArr[4] === 1) {
        displayQ6();
    } else if(doneArr[5] === 1) {
        displayQ7();
    } else if(doneArr[6] === 1) {
        displayQ8();
    } else if(doneArr[7] === 1) {
        displayQ9();
    } else if(doneArr[8] === 1) {
        displayQ10();
    } else if(doneArr[9] === 1) {
        displayQ11();
    } else if(doneArr[10] === 1) {
        displayQ12();
    } else if(doneArr[11] === 1) {
        displayQ13();
    } else if(doneArr[12] === 1) {
        displayQ14();
    } else if(doneArr[13] === 1) {
        displayQ15();
    } else if(doneArr[14] === 1) {
        end();
    } 
}

function pointQ2(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 1) {
        displayQ2();
    } else if(doneArr[1] === 1) {
        displayQ3();
    } else if(doneArr[2] === 1) {
        displayQ4();
    } else if(doneArr[3] === 1) {
        displayQ5();
    } else if(doneArr[4] === 1) {
        displayQ6();
    } else if(doneArr[5] === 1) {
        displayQ7();
    } else if(doneArr[6] === 1) {
        displayQ8();
    } else if(doneArr[7] === 1) {
        displayQ9();
    } else if(doneArr[8] === 1) {
        displayQ10();
    } else if(doneArr[9] === 1) {
        displayQ11();
    } else if(doneArr[10] === 1) {
        displayQ12();
    } else if(doneArr[11] === 1) {
        displayQ13();
    } else if(doneArr[12] === 1) {
        displayQ14();
    } else if(doneArr[13] === 1) {
        displayQ15();
    } else if(doneArr[14] === 1) {
        end();
    } 
}

function displayQ3() {
    if(doneArr[2] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[2] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[2] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[2] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[2] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[2] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[2] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[2] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[2] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[2] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[2] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[2] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[2] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[2] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[2] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ3() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 2) {
        displayQ2();
    } else if(doneArr[1] === 2) {
        displayQ3();
    } else if(doneArr[2] === 2) {
        displayQ4();
    } else if(doneArr[3] === 2) {
        displayQ5();
    } else if(doneArr[4] === 2) {
        displayQ6();
    } else if(doneArr[5] === 2) {
        displayQ7();
    } else if(doneArr[6] === 2) {
        displayQ8();
    } else if(doneArr[7] === 2) {
        displayQ9();
    } else if(doneArr[8] === 2) {
        displayQ10();
    } else if(doneArr[9] === 2) {
        displayQ11();
    } else if(doneArr[10] === 2) {
        displayQ12();
    } else if(doneArr[11] === 2) {
        displayQ13();
    } else if(doneArr[12] === 2) {
        displayQ14();
    } else if(doneArr[13] === 2) {
        displayQ15();
    } else if(doneArr[14] === 2) {
        end();
    } 
}

function pointQ3(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 2) {
        displayQ2();
    } else if(doneArr[1] === 2) {
        displayQ3();
    } else if(doneArr[2] === 2) {
        displayQ4();
    } else if(doneArr[3] === 2) {
        displayQ5();
    } else if(doneArr[4] === 2) {
        displayQ6();
    } else if(doneArr[5] === 2) {
        displayQ7();
    } else if(doneArr[6] === 2) {
        displayQ8();
    } else if(doneArr[7] === 2) {
        displayQ9();
    } else if(doneArr[8] === 2) {
        displayQ10();
    } else if(doneArr[9] === 2) {
        displayQ11();
    } else if(doneArr[10] === 2) {
        displayQ12();
    } else if(doneArr[11] === 2) {
        displayQ13();
    } else if(doneArr[12] === 2) {
        displayQ14();
    } else if(doneArr[13] === 2) {
        displayQ15();
    } else if(doneArr[14] === 2) {
        end();
    } 
}

function displayQ4() {
    if(doneArr[3] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[3] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[3] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[3] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[3] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[3] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[3] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[3] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[3] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[3] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[3] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[3] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[3] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[3] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[3] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ4() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 3) {
        displayQ2();
    } else if(doneArr[1] === 3) {
        displayQ3();
    } else if(doneArr[2] === 3) {
        displayQ4();
    } else if(doneArr[3] === 3) {
        displayQ5();
    } else if(doneArr[4] === 3) {
        displayQ6();
    } else if(doneArr[5] === 3) {
        displayQ7();
    } else if(doneArr[6] === 3) {
        displayQ8();
    } else if(doneArr[7] === 3) {
        displayQ9();
    } else if(doneArr[8] === 3) {
        displayQ10();
    } else if(doneArr[9] === 3) {
        displayQ11();
    } else if(doneArr[10] === 3) {
        displayQ12();
    } else if(doneArr[11] === 3) {
        displayQ13();
    } else if(doneArr[12] === 3) {
        displayQ14();
    } else if(doneArr[13] === 3) {
        displayQ15();
    } else if(doneArr[14] === 3) {
        end();
    } 
}

function pointQ4(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 3) {
        displayQ2();
    } else if(doneArr[1] === 3) {
        displayQ3();
    } else if(doneArr[2] === 3) {
        displayQ4();
    } else if(doneArr[3] === 3) {
        displayQ5();
    } else if(doneArr[4] === 3) {
        displayQ6();
    } else if(doneArr[5] === 3) {
        displayQ7();
    } else if(doneArr[6] === 3) {
        displayQ8();
    } else if(doneArr[7] === 3) {
        displayQ9();
    } else if(doneArr[8] === 3) {
        displayQ10();
    } else if(doneArr[9] === 3) {
        displayQ11();
    } else if(doneArr[10] === 3) {
        displayQ12();
    } else if(doneArr[11] === 3) {
        displayQ13();
    } else if(doneArr[12] === 3) {
        displayQ14();
    } else if(doneArr[13] === 3) {
        displayQ15();
    } else if(doneArr[14] === 3) {
        end();
    } 
}

function displayQ5() {
    if(doneArr[4] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[4] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[4] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[4] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[4] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[4] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[4] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[4] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[4] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[4] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[4] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[4] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[4] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[4] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[4] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ5() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 4) {
        displayQ2();
    } else if(doneArr[1] === 4) {
        displayQ3();
    } else if(doneArr[2] === 4) {
        displayQ4();
    } else if(doneArr[3] === 4) {
        displayQ5();
    } else if(doneArr[4] === 4) {
        displayQ6();
    } else if(doneArr[5] === 4) {
        displayQ7();
    } else if(doneArr[6] === 4) {
        displayQ8();
    } else if(doneArr[7] === 4) {
        displayQ9();
    } else if(doneArr[8] === 4) {
        displayQ10();
    } else if(doneArr[9] === 4) {
        displayQ11();
    } else if(doneArr[10] === 4) {
        displayQ12();
    } else if(doneArr[11] === 4) {
        displayQ13();
    } else if(doneArr[12] === 4) {
        displayQ14();
    } else if(doneArr[13] === 4) {
        displayQ15();
    } else if(doneArr[14] === 4) {
        end();
    } 
}

function pointQ5(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 4) {
        displayQ2();
    } else if(doneArr[1] === 4) {
        displayQ3();
    } else if(doneArr[2] === 4) {
        displayQ4();
    } else if(doneArr[3] === 4) {
        displayQ5();
    } else if(doneArr[4] === 4) {
        displayQ6();
    } else if(doneArr[5] === 4) {
        displayQ7();
    } else if(doneArr[6] === 4) {
        displayQ8();
    } else if(doneArr[7] === 4) {
        displayQ9();
    } else if(doneArr[8] === 4) {
        displayQ10();
    } else if(doneArr[9] === 4) {
        displayQ11();
    } else if(doneArr[10] === 4) {
        displayQ12();
    } else if(doneArr[11] === 4) {
        displayQ13();
    } else if(doneArr[12] === 4) {
        displayQ14();
    } else if(doneArr[13] === 4) {
        displayQ15();
    } else if(doneArr[14] === 4) {
        end();
    } 
}

function displayQ6() {
    if(doneArr[5] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[5] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[5] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[5] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[5] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[5] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[5] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[5] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[5] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[5] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[5] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[5] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[5] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[5] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[5] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ6() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 5) {
        displayQ2();
    } else if(doneArr[1] === 5) {
        displayQ3();
    } else if(doneArr[2] === 5) {
        displayQ4();
    } else if(doneArr[3] === 5) {
        displayQ5();
    } else if(doneArr[4] === 5) {
        displayQ6();
    } else if(doneArr[5] === 5) {
        displayQ7();
    } else if(doneArr[6] === 5) {
        displayQ8();
    } else if(doneArr[7] === 5) {
        displayQ9();
    } else if(doneArr[8] === 5) {
        displayQ10();
    } else if(doneArr[9] === 5) {
        displayQ11();
    } else if(doneArr[10] === 5) {
        displayQ12();
    } else if(doneArr[11] === 5) {
        displayQ13();
    } else if(doneArr[12] === 5) {
        displayQ14();
    } else if(doneArr[13] === 5) {
        displayQ15();
    } else if(doneArr[14] === 5) {
        end();
    } 
}

function pointQ6(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 5) {
        displayQ2();
    } else if(doneArr[1] === 5) {
        displayQ3();
    } else if(doneArr[2] === 5) {
        displayQ4();
    } else if(doneArr[3] === 5) {
        displayQ5();
    } else if(doneArr[4] === 5) {
        displayQ6();
    } else if(doneArr[5] === 5) {
        displayQ7();
    } else if(doneArr[6] === 5) {
        displayQ8();
    } else if(doneArr[7] === 5) {
        displayQ9();
    } else if(doneArr[8] === 5) {
        displayQ10();
    } else if(doneArr[9] === 5) {
        displayQ11();
    } else if(doneArr[10] === 5) {
        displayQ12();
    } else if(doneArr[11] === 5) {
        displayQ13();
    } else if(doneArr[12] === 5) {
        displayQ14();
    } else if(doneArr[13] === 5) {
        displayQ15();
    } else if(doneArr[14] === 5) {
        end();
    } 
}

function displayQ7() {
    if(doneArr[6] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[6] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[6] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[6] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[6] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[6] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[6] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[6] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[6] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[6] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[6] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[6] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[6] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[6] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[6] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ7() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 6) {
        displayQ2();
    } else if(doneArr[1] === 6) {
        displayQ3();
    } else if(doneArr[2] === 6) {
        displayQ4();
    } else if(doneArr[3] === 6) {
        displayQ5();
    } else if(doneArr[4] === 6) {
        displayQ6();
    } else if(doneArr[5] === 6) {
        displayQ7();
    } else if(doneArr[6] === 6) {
        displayQ8();
    } else if(doneArr[7] === 6) {
        displayQ9();
    } else if(doneArr[8] === 6) {
        displayQ10();
    } else if(doneArr[9] === 6) {
        displayQ11();
    } else if(doneArr[10] === 6) {
        displayQ12();
    } else if(doneArr[11] === 6) {
        displayQ13();
    } else if(doneArr[12] === 6) {
        displayQ14();
    } else if(doneArr[13] === 6) {
        displayQ15();
    } else if(doneArr[14] === 6) {
        end();
    } 
}

function pointQ7(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 6) {
        displayQ2();
    } else if(doneArr[1] === 6) {
        displayQ3();
    } else if(doneArr[2] === 6) {
        displayQ4();
    } else if(doneArr[3] === 6) {
        displayQ5();
    } else if(doneArr[4] === 6) {
        displayQ6();
    } else if(doneArr[5] === 6) {
        displayQ7();
    } else if(doneArr[6] === 6) {
        displayQ8();
    } else if(doneArr[7] === 6) {
        displayQ9();
    } else if(doneArr[8] === 6) {
        displayQ10();
    } else if(doneArr[9] === 6) {
        displayQ11();
    } else if(doneArr[10] === 6) {
        displayQ12();
    } else if(doneArr[11] === 6) {
        displayQ13();
    } else if(doneArr[12] === 6) {
        displayQ14();
    } else if(doneArr[13] === 6) {
        displayQ15();
    } else if(doneArr[14] === 6) {
        end();
    } 
}

function displayQ8() {
    if(doneArr[7] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[7] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[7] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[7] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[7] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[7] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[7] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[7] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[7] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[7] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[7] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[7] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[7] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[7] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[7] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ8() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 7) {
        displayQ2();
    } else if(doneArr[1] === 7) {
        displayQ3();
    } else if(doneArr[2] === 7) {
        displayQ4();
    } else if(doneArr[3] === 7) {
        displayQ5();
    } else if(doneArr[4] === 7) {
        displayQ6();
    } else if(doneArr[5] === 7) {
        displayQ7();
    } else if(doneArr[6] === 7) {
        displayQ8();
    } else if(doneArr[7] === 7) {
        displayQ9();
    } else if(doneArr[8] === 7) {
        displayQ10();
    } else if(doneArr[9] === 7) {
        displayQ11();
    } else if(doneArr[10] === 7) {
        displayQ12();
    } else if(doneArr[11] === 7) {
        displayQ13();
    } else if(doneArr[12] === 7) {
        displayQ14();
    } else if(doneArr[13] === 7) {
        displayQ15();
    } else if(doneArr[14] === 7) {
        end();
    } 
}

function pointQ8(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 7) {
        displayQ2();
    } else if(doneArr[1] === 7) {
        displayQ3();
    } else if(doneArr[2] === 7) {
        displayQ4();
    } else if(doneArr[3] === 7) {
        displayQ5();
    } else if(doneArr[4] === 7) {
        displayQ6();
    } else if(doneArr[5] === 7) {
        displayQ7();
    } else if(doneArr[6] === 7) {
        displayQ8();
    } else if(doneArr[7] === 7) {
        displayQ9();
    } else if(doneArr[8] === 7) {
        displayQ10();
    } else if(doneArr[9] === 7) {
        displayQ11();
    } else if(doneArr[10] === 7) {
        displayQ12();
    } else if(doneArr[11] === 7) {
        displayQ13();
    } else if(doneArr[12] === 7) {
        displayQ14();
    } else if(doneArr[13] === 7) {
        displayQ15();
    } else if(doneArr[14] === 7) {
        end();
    } 
}

function displayQ9() {
    if(doneArr[8] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[8] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[8] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[8] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[8] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[8] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[8] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[8] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[8] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[8] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[8] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[8] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[8] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[8] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[8] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ9() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 8) {
        displayQ2();
    } else if(doneArr[1] === 8) {
        displayQ3();
    } else if(doneArr[2] === 8) {
        displayQ4();
    } else if(doneArr[3] === 8) {
        displayQ5();
    } else if(doneArr[4] === 8) {
        displayQ6();
    } else if(doneArr[5] === 8) {
        displayQ7();
    } else if(doneArr[6] === 8) {
        displayQ8();
    } else if(doneArr[7] === 8) {
        displayQ9();
    } else if(doneArr[8] === 8) {
        displayQ10();
    } else if(doneArr[9] === 8) {
        displayQ11();
    } else if(doneArr[10] === 8) {
        displayQ12();
    } else if(doneArr[11] === 8) {
        displayQ13();
    } else if(doneArr[12] === 8) {
        displayQ14();
    } else if(doneArr[13] === 8) {
        displayQ15();
    } else if(doneArr[14] === 8) {
        end();
    } 
}

function pointQ9(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 8) {
        displayQ2();
    } else if(doneArr[1] === 8) {
        displayQ3();
    } else if(doneArr[2] === 8) {
        displayQ4();
    } else if(doneArr[3] === 8) {
        displayQ5();
    } else if(doneArr[4] === 8) {
        displayQ6();
    } else if(doneArr[5] === 8) {
        displayQ7();
    } else if(doneArr[6] === 8) {
        displayQ8();
    } else if(doneArr[7] === 8) {
        displayQ9();
    } else if(doneArr[8] === 8) {
        displayQ10();
    } else if(doneArr[9] === 8) {
        displayQ11();
    } else if(doneArr[10] === 8) {
        displayQ12();
    } else if(doneArr[11] === 8) {
        displayQ13();
    } else if(doneArr[12] === 8) {
        displayQ14();
    } else if(doneArr[13] === 8) {
        displayQ15();
    } else if(doneArr[14] === 8) {
        end();
    } 
}

function displayQ10() {
    if(doneArr[9] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[9] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[9] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[9] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[9] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[9] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[9] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[9] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[9] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[9] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[9] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[9] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[9] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[9] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[9] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ10() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 9) {
        displayQ2();
    } else if(doneArr[1] === 9) {
        displayQ3();
    } else if(doneArr[2] === 9) {
        displayQ4();
    } else if(doneArr[3] === 9) {
        displayQ5();
    } else if(doneArr[4] === 9) {
        displayQ6();
    } else if(doneArr[5] === 9) {
        displayQ7();
    } else if(doneArr[6] === 9) {
        displayQ8();
    } else if(doneArr[7] === 9) {
        displayQ9();
    } else if(doneArr[8] === 9) {
        displayQ10();
    } else if(doneArr[9] === 9) {
        displayQ11();
    } else if(doneArr[10] === 9) {
        displayQ12();
    } else if(doneArr[11] === 9) {
        displayQ13();
    } else if(doneArr[12] === 9) {
        displayQ14();
    } else if(doneArr[13] === 9) {
        displayQ15();
    } else if(doneArr[14] === 9) {
        end();
    } 
}

function pointQ10(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 9) {
        displayQ2();
    } else if(doneArr[1] === 9) {
        displayQ3();
    } else if(doneArr[2] === 9) {
        displayQ4();
    } else if(doneArr[3] === 9) {
        displayQ5();
    } else if(doneArr[4] === 9) {
        displayQ6();
    } else if(doneArr[5] === 9) {
        displayQ7();
    } else if(doneArr[6] === 9) {
        displayQ8();
    } else if(doneArr[7] === 9) {
        displayQ9();
    } else if(doneArr[8] === 9) {
        displayQ10();
    } else if(doneArr[9] === 9) {
        displayQ11();
    } else if(doneArr[10] === 9) {
        displayQ12();
    } else if(doneArr[11] === 9) {
        displayQ13();
    } else if(doneArr[12] === 9) {
        displayQ14();
    } else if(doneArr[13] === 9) {
        displayQ15();
    } else if(doneArr[14] === 9) {
        end();
    } 
}

function displayQ11() {
    if(doneArr[10] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[10] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[10] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[10] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[10] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[10] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[10] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[10] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[10] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[10] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[10] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[10] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[10] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[10] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[10] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ11() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 10) {
        displayQ2();
    } else if(doneArr[1] === 10) {
        displayQ3();
    } else if(doneArr[2] === 10) {
        displayQ4();
    } else if(doneArr[3] === 10) {
        displayQ5();
    } else if(doneArr[4] === 10) {
        displayQ6();
    } else if(doneArr[5] === 10) {
        displayQ7();
    } else if(doneArr[6] === 10) {
        displayQ8();
    } else if(doneArr[7] === 10) {
        displayQ9();
    } else if(doneArr[8] === 10) {
        displayQ10();
    } else if(doneArr[9] === 10) {
        displayQ11();
    } else if(doneArr[10] === 10) {
        displayQ12();
    } else if(doneArr[11] === 10) {
        displayQ13();
    } else if(doneArr[12] === 10) {
        displayQ14();
    } else if(doneArr[13] === 10) {
        displayQ15();
    } else if(doneArr[14] === 10) {
        end();
    } 
}

function pointQ11(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 10) {
        displayQ2();
    } else if(doneArr[1] === 10) {
        displayQ3();
    } else if(doneArr[2] === 10) {
        displayQ4();
    } else if(doneArr[3] === 10) {
        displayQ5();
    } else if(doneArr[4] === 10) {
        displayQ6();
    } else if(doneArr[5] === 10) {
        displayQ7();
    } else if(doneArr[6] === 10) {
        displayQ8();
    } else if(doneArr[7] === 10) {
        displayQ9();
    } else if(doneArr[8] === 10) {
        displayQ10();
    } else if(doneArr[9] === 10) {
        displayQ11();
    } else if(doneArr[10] === 10) {
        displayQ12();
    } else if(doneArr[11] === 10) {
        displayQ13();
    } else if(doneArr[12] === 10) {
        displayQ14();
    } else if(doneArr[13] === 10) {
        displayQ15();
    } else if(doneArr[14] === 10) {
        end();
    } 
}

function displayQ12() {
    if(doneArr[11] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[11] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[11] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[11] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[11] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[11] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[11] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[11] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[11] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[11] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[11] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[11] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[11] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[11] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[11] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ12() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 11) {
        displayQ2();
    } else if(doneArr[1] === 11) {
        displayQ3();
    } else if(doneArr[2] === 11) {
        displayQ4();
    } else if(doneArr[3] === 11) {
        displayQ5();
    } else if(doneArr[4] === 11) {
        displayQ6();
    } else if(doneArr[5] === 11) {
        displayQ7();
    } else if(doneArr[6] === 11) {
        displayQ8();
    } else if(doneArr[7] === 11) {
        displayQ9();
    } else if(doneArr[8] === 11) {
        displayQ10();
    } else if(doneArr[9] === 11) {
        displayQ11();
    } else if(doneArr[10] === 11) {
        displayQ12();
    } else if(doneArr[11] === 11) {
        displayQ13();
    } else if(doneArr[12] === 11) {
        displayQ14();
    } else if(doneArr[13] === 11) {
        displayQ15();
    } else if(doneArr[14] === 11) {
        end();
    } 
}

function pointQ12(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 11) {
        displayQ2();
    } else if(doneArr[1] === 11) {
        displayQ3();
    } else if(doneArr[2] === 11) {
        displayQ4();
    } else if(doneArr[3] === 11) {
        displayQ5();
    } else if(doneArr[4] === 11) {
        displayQ6();
    } else if(doneArr[5] === 11) {
        displayQ7();
    } else if(doneArr[6] === 11) {
        displayQ8();
    } else if(doneArr[7] === 11) {
        displayQ9();
    } else if(doneArr[8] === 11) {
        displayQ10();
    } else if(doneArr[9] === 11) {
        displayQ11();
    } else if(doneArr[10] === 11) {
        displayQ12();
    } else if(doneArr[11] === 11) {
        displayQ13();
    } else if(doneArr[12] === 11) {
        displayQ14();
    } else if(doneArr[13] === 11) {
        displayQ15();
    } else if(doneArr[14] === 11) {
        end();
    } 
}

function displayQ13() {
    if(doneArr[12] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[12] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[12] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[12] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[12] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[12] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[12] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[12] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[12] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[12] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[12] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[12] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[12] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[12] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[12] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ13() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 12) {
        displayQ2();
    } else if(doneArr[1] === 12) {
        displayQ3();
    } else if(doneArr[2] === 12) {
        displayQ4();
    } else if(doneArr[3] === 12) {
        displayQ5();
    } else if(doneArr[4] === 12) {
        displayQ6();
    } else if(doneArr[5] === 12) {
        displayQ7();
    } else if(doneArr[6] === 12) {
        displayQ8();
    } else if(doneArr[7] === 12) {
        displayQ9();
    } else if(doneArr[8] === 12) {
        displayQ10();
    } else if(doneArr[9] === 12) {
        displayQ11();
    } else if(doneArr[10] === 12) {
        displayQ12();
    } else if(doneArr[11] === 12) {
        displayQ13();
    } else if(doneArr[12] === 12) {
        displayQ14();
    } else if(doneArr[13] === 12) {
        displayQ15();
    } else if(doneArr[14] === 12) {
        end();
    } 
}

function pointQ13(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 12) {
        displayQ2();
    } else if(doneArr[1] === 12) {
        displayQ3();
    } else if(doneArr[2] === 12) {
        displayQ4();
    } else if(doneArr[3] === 12) {
        displayQ5();
    } else if(doneArr[4] === 12) {
        displayQ6();
    } else if(doneArr[5] === 12) {
        displayQ7();
    } else if(doneArr[6] === 12) {
        displayQ8();
    } else if(doneArr[7] === 12) {
        displayQ9();
    } else if(doneArr[8] === 12) {
        displayQ10();
    } else if(doneArr[9] === 12) {
        displayQ11();
    } else if(doneArr[10] === 12) {
        displayQ12();
    } else if(doneArr[11] === 12) {
        displayQ13();
    } else if(doneArr[12] === 12) {
        displayQ14();
    } else if(doneArr[13] === 12) {
        displayQ15();
    } else if(doneArr[14] === 12) {
        end();
    } 
}

function displayQ14() {
    if(doneArr[13] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[13] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[13] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[13] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[13] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[13] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[13] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[13] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[13] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[13] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[13] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[13] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[13] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[13] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[13] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ14() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 13) {
        displayQ2();
    } else if(doneArr[1] === 13) {
        displayQ3();
    } else if(doneArr[2] === 13) {
        displayQ4();
    } else if(doneArr[3] === 13) {
        displayQ5();
    } else if(doneArr[4] === 13) {
        displayQ6();
    } else if(doneArr[5] === 13) {
        displayQ7();
    } else if(doneArr[6] === 13) {
        displayQ8();
    } else if(doneArr[7] === 13) {
        displayQ9();
    } else if(doneArr[8] === 13) {
        displayQ10();
    } else if(doneArr[9] === 13) {
        displayQ11();
    } else if(doneArr[10] === 13) {
        displayQ12();
    } else if(doneArr[11] === 13) {
        displayQ13();
    } else if(doneArr[12] === 13) {
        displayQ14();
    } else if(doneArr[13] === 13) {
        displayQ15();
    } else if(doneArr[14] === 13) {
        end();
    } 
}

function pointQ14(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 13) {
        displayQ2();
    } else if(doneArr[1] === 13) {
        displayQ3();
    } else if(doneArr[2] === 13) {
        displayQ4();
    } else if(doneArr[3] === 13) {
        displayQ5();
    } else if(doneArr[4] === 13) {
        displayQ6();
    } else if(doneArr[5] === 13) {
        displayQ7();
    } else if(doneArr[6] === 13) {
        displayQ8();
    } else if(doneArr[7] === 13) {
        displayQ9();
    } else if(doneArr[8] === 13) {
        displayQ10();
    } else if(doneArr[9] === 13) {
        displayQ11();
    } else if(doneArr[10] === 13) {
        displayQ12();
    } else if(doneArr[11] === 13) {
        displayQ13();
    } else if(doneArr[12] === 13) {
        displayQ14();
    } else if(doneArr[13] === 13) {
        displayQ15();
    } else if(doneArr[14] === 13) {
        end();
    } 
}

function displayQ15() {
    if(doneArr[14] === 0) {
        document.querySelector(".Q1").classList.remove("invisible");
    } else if(doneArr[14] === 1) {
        document.querySelector(".Q2").classList.remove("invisible");
    } else if(doneArr[14] === 2) {
        document.querySelector(".Q3").classList.remove("invisible");
    } else if(doneArr[14] === 3) {
        document.querySelector(".Q4").classList.remove("invisible");
    } else if(doneArr[14] === 4) {
        document.querySelector(".Q5").classList.remove("invisible");
    } else if(doneArr[14] === 5) {
        document.querySelector(".Q6").classList.remove("invisible");
    } else if(doneArr[14] === 6) {
        document.querySelector(".Q7").classList.remove("invisible");
    } else if(doneArr[14] === 7) {
        document.querySelector(".Q8").classList.remove("invisible");
    } else if(doneArr[14] === 8) {
        document.querySelector(".Q9").classList.remove("invisible");
    } else if(doneArr[14] === 9) {
        document.querySelector(".Q10").classList.remove("invisible");
    } else if(doneArr[14] === 10) {
        document.querySelector(".Q11").classList.remove("invisible");
    } else if(doneArr[14] === 11) {
       document.querySelector(".Q12").classList.remove("invisible");
   } else if(doneArr[14] === 12) {
       document.querySelector(".Q13").classList.remove("invisible");
   } else if(doneArr[14] === 13) {
       document.querySelector(".Q14").classList.remove("invisible");
   } else if(doneArr[14] === 14) {
       document.querySelector(".Q15").classList.remove("invisible");
   }
}

function wrongQ15() {
    noSound.play();
    incorrect = incorrect + 1;
    clearDiv();
    if(doneArr[0] === 14) {
        displayQ2();
    } else if(doneArr[1] === 14) {
        displayQ3();
    } else if(doneArr[2] === 14) {
        displayQ4();
    } else if(doneArr[3] === 14) {
        displayQ5();
    } else if(doneArr[4] === 14) {
        displayQ6();
    } else if(doneArr[5] === 14) {
        displayQ7();
    } else if(doneArr[6] === 14) {
        displayQ8();
    } else if(doneArr[7] === 14) {
        displayQ9();
    } else if(doneArr[8] === 14) {
        displayQ10();
    } else if(doneArr[9] === 14) {
        displayQ11();
    } else if(doneArr[10] === 14) {
        displayQ12();
    } else if(doneArr[11] === 14) {
        displayQ13();
    } else if(doneArr[12] === 14) {
        displayQ14();
    } else if(doneArr[13] === 14) {
        displayQ15();
    } else if(doneArr[14] === 14) {
        end();
    } 
}

function pointQ15(pointValue) {
    yesSound.play();
    correct = correct + 1;
    score = score + pointValue;
    clearDiv();
    if(doneArr[0] === 14) {
        displayQ2();
    } else if(doneArr[1] === 14) {
        displayQ3();
    } else if(doneArr[2] === 14) {
        displayQ4();
    } else if(doneArr[3] === 14) {
        displayQ5();
    } else if(doneArr[4] === 14) {
        displayQ6();
    } else if(doneArr[5] === 14) {
        displayQ7();
    } else if(doneArr[6] === 14) {
        displayQ8();
    } else if(doneArr[7] === 14) {
        displayQ9();
    } else if(doneArr[8] === 14) {
        displayQ10();
    } else if(doneArr[9] === 14) {
        displayQ11();
    } else if(doneArr[10] === 14) {
        displayQ12();
    } else if(doneArr[11] === 14) {
        displayQ13();
    } else if(doneArr[12] === 14) {
        displayQ14();
    } else if(doneArr[13] === 14) {
        displayQ15();
    } else if(doneArr[14] === 14) {
        end();
    } 
}

 function clearDiv() {
     document.querySelector(".Q1").classList.add("invisible");
     document.querySelector(".Q2").classList.add("invisible");
     document.querySelector(".Q3").classList.add("invisible");
     document.querySelector(".Q4").classList.add("invisible");
     document.querySelector(".Q5").classList.add("invisible");
     document.querySelector(".Q6").classList.add("invisible");
     document.querySelector(".Q7").classList.add("invisible");
     document.querySelector(".Q8").classList.add("invisible");
     document.querySelector(".Q9").classList.add("invisible");
     document.querySelector(".Q10").classList.add("invisible");
     document.querySelector(".Q11").classList.add("invisible");
     document.querySelector(".Q12").classList.add("invisible");
     document.querySelector(".Q13").classList.add("invisible");
     document.querySelector(".Q14").classList.add("invisible");
     document.querySelector(".Q15").classList.add("invisible");
 }
 
function end() {
    document.querySelector(".question").innerHTML = "<h1 class='h1'>Thank you for playing!</h1><br><br><p class='qp'>Your Score: " + score +"</p><br><br><p class='qp'>Correct: " + correct + "</p><br><br><p class='qp'>Incorrect: "+ incorrect + "</p>";
}