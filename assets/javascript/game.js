


// on ready
$(document).ready(function(){
    //Random Number Generated
    var generatedNumber = Math.floor(Math.random() * 101 + 19)
    $('#matchNumber').text(generatedNumber);

    //varibles
    var randomNumber = [];
    var scored = 0;
    var win = 0;
    var loss = 0;
    $(".wins").text(win);
    $(".losses").text(loss);
    
    //functions 
    function crystalNumber() {
        for ( var i = 0; i < 4; i++){
            var number = Math.floor(Math.random() * 11 + 1);
            randomNumber.push(number);
        }
    }
    crystalNumber();

    //rest function
    function resetGame() {
        generatedNumber = Math.floor(Math.random()* 101 + 19);
        $('#matchNumber').text(generatedNumber);
        randomNumber = [];
        crystalNumber();
        scored = 0;
        $('#score').text(scored);
    }

    //win function
    function winner() {
        alert("You Won That Round!");
        win++;
        $(".wins").text(win);
        resetGame();
    }

    //lost function
    function lost() {
        alert("You Lost That Round!");
        loss++;
        $(".losses").text(loss);
        resetGame();
    }

    //On Click Green Crystal
    $(".greenCrystal").on('click', function() {
        scored = scored + randomNumber[0];
        $('#score').text(scored);

        if (scored == generatedNumber) {
            winner();
        }
        else if (scored > generatedNumber) {
            lost();
        }
    })

    //On Click Pink Crystal
    $(".pinkCrystal").on('click', function() {
        scored = scored + randomNumber[1];
        $('#score').text(scored);

        if (scored == generatedNumber) {
            winner();
        }
        else if (scored > generatedNumber) {
            lost();
        }
    })

    //On Click Red Crystal
    $(".redCrystal").on('click', function() {
        scored = scored + randomNumber[2];
        $('#score').text(scored);

        if (scored == generatedNumber) {
            winner();
        }
        else if (scored > generatedNumber) {
            lost();
        }
    })

    //On Click Blue Crystal
    $(".blueCrystal").on('click', function() {
        scored = scored + randomNumber[3];
        $('#score').text(scored);

        if (scored == generatedNumber) {
            winner();
        }
        else if (scored > generatedNumber) {
            lost();
        }
    })
})




//Breaking It Down:

//number appears at start of game: random number between 19-120

//when crystal is clicked add number to total score on screen

//each crystal has a random hidden value between 1-12

//player wins if score matches the random number at start

//keep track of wins/losses

// after round resets: new number appears and new crystal numbers appear and scored counter reset to 0



