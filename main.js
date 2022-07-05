"use strict"

// random text
const setOfWords = [
    "The whole purpose of Microsoft Word is to let you type text and make it look pretty so you can print or send it for other people to read.So the first step in using Microsoft Word is learning how to enter text in a Word file, called a document. In every document, Word displays a blinking cursor that points to where your text will appear if you type anything. To move the cursor, you can use the keyboard or the mouse. To apply an Open password, type it in the Password To Open text box. To apply a Modify password, type it in the Password To Modify text box. Click the OK button. Word displays the Confirm Password dialog box.Type the password in the Reenter Password To Open text box or the Reenter Password To Modify text box, and then click the OK button. Word closes the Confirm Password dialog box and the General Options dialog box",

    "Whether you work at home or in a company or organization, you'll probably have documents you need to protect against. This tutorial introduces you to the features that Word provides for protecting your documents and shows you how to use them. Word provides eight features that you can use to secure your documents. Table below provides a brief overview of these features, giving a brief explanation of each and indicating its purpose. You'll learn the details of the features in the rest of this tutorial.",

    "If you want to source code then link is given in the description so you can create your own version of this challange. The double equal sign == is a comparison operator called Equal Operator, it accepts two inputs to compare and return true if the values are same and return false if values are not same. Keep in mind that the equality operator == is different than the assignment operator =. The assignment operator changes the variable on the left to have a new value, while the equal operator == tests for equality and returns true or false."
];

// set the variables get the id
const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');

// set time
let startTime;
let endTime

// create a play game function
const playGame = () => {

    // creatting a random number like 1, 2, 3...
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    // create a new date
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

// create a end play function
const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    // set the total time
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    // set the speed 1min = 60 second
    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = `your typed total at ${speed} words per minutes🕥`;
    msg.innerText = finalMsg;

    finalMsg += compareWords(msg.innerText, totalStr);

    msg.innerText = finalMsg;
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener("click", function(){
    if (this.innerText == "Start") {
        typeWords.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})