// This function evaluates the score entered by the user.
function evaluateScore(score) {

    // Checks if the score is not a number.
    if (isNaN(score)) {

        // Returns "Invalid score" when the input is not numeric.
        return "Invalid score";
    }

    // Checks if the score is less than or equal to zero.
    if (score <= 0) {

        // Returns "Invalid score" for zero or negative scores.
        return "Invalid score";
    }

    // Checks if the score is greater than 100.
    if (score > 100) {

        // Returns "Invalid score" when the score is above 100.
        return "Invalid score";
    }

    // Checks if the score is from 90 to 100.
    if (score >= 90 && score <= 100) {

        // Returns "Excellent" for scores from 90 to 100.
        return "Excellent";
    }

    // Checks if the score is from 75 to 89.
    else if (score >= 75 && score <= 89) {

        // Returns "Passed" for scores from 75 to 89.
        return "Passed";
    }

    // Runs when the score is below 75 but still valid.
    else {

        // Returns "Failed" for scores from 1 to 74.
        return "Failed";
    }
}


// This function starts the whole program.
function startProgram() {

    // Displays the required welcome message using alert().
    alert("Welcome to the Student Score Evaluation System!");


    // Asks the user to enter their name.
    let name = prompt("Please enter your name:");


    // Checks if the name is empty or the user pressed Cancel.
    if (name === null || name.trim() === "") {

        // Displays an error message when no name is entered.
        alert("Invalid input. Please enter your name.");

        // Stops the function.
        return;
    }


    // Asks the user to enter their score.
    let scoreInput = prompt("Please enter your score from 1 to 100:");


    // Checks if the score input is empty or the user pressed Cancel.
    if (scoreInput === null || scoreInput.trim() === "") {

        // Displays an error message when no score is entered.
        alert("Invalid input. Please enter your score.");

        // Stops the function.
        return;
    }


    // Converts the score entered as text into a number.
    let score = Number(scoreInput);


    // Asks the user if they want to continue.
    let continueProgram = confirm("Do you want to continue with the evaluation?");


    // Checks if the user selected Cancel in the confirm dialog.
    if (continueProgram === false) {

        // Displays a message when the user chooses not to continue.
        alert("Evaluation cancelled.");

        // Stops the function.
        return;
    }


    // Calls the evaluateScore function and sends the score to it.
    let remark = evaluateScore(score);


    // Gets the result area from the HTML page.
    let result = document.getElementById("result");


    // Checks if the score is invalid.
    if (remark === "Invalid score") {

        // Displays the invalid result on the webpage.
        result.innerHTML =
            "<h2>Result</h2>" +
            "<p>Name: " + name + "</p>" +
            "<p>Score: " + scoreInput + "</p>" +
            "<p class='invalid'>Remark: Invalid score</p>";
    }

    // Checks if the student received an excellent score.
    else if (remark === "Excellent") {

        // Displays the excellent result on the webpage.
        result.innerHTML =
            "<h2>Result</h2>" +
            "<p>Name: " + name + "</p>" +
            "<p>Score: " + score + "</p>" +
            "<p class='success'>Remark: Excellent</p>";
    }

    // Checks if the student passed.
    else if (remark === "Passed") {

        // Displays the passed result on the webpage.
        result.innerHTML =
            "<h2>Result</h2>" +
            "<p>Name: " + name + "</p>" +
            "<p>Score: " + score + "</p>" +
            "<p class='success'>Remark: Passed</p>";
    }

    // Runs when the score is below 75.
    else {

        // Displays the failed result on the webpage.
        result.innerHTML =
            "<h2>Result</h2>" +
            "<p>Name: " + name + "</p>" +
            "<p>Score: " + score + "</p>" +
            "<p class='failed'>Remark: Failed</p>";
    }
}