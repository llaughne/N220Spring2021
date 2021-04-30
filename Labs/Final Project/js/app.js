//Array for card data and stored values 

var animalArray = ['dog', 'dog', 'cat', 'cat', 'mouse', 'mouse', 'bird', 'bird', 'fish', 'fish', 'frog', 'frog', 'turtle', 'turtle', 'snake', 'snake'];
var Values = [];
var CardIds = [];
var cardsFlipped = 0;

//Card shuffle

var shuffle = function (array) {

    var i = array.length, j, temp;

    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;

    }

}

//Function to flip and match cards

//flips card
function flipCard(cardTile, val) {

    if (cardTile.innerHTML == "" && Values.length < 2) {

        cardTile.innerHTML = val;

        if (Values.length == 0) {

            Values.push(val);

            CardIds.push(cardTile.id);

        }
        // Adding data to cards
        else if (Values.length == 1) {

            Values.push(val);

            CardIds.push(cardTile.id);

            // matched cards
            if (Values[0] == Values[1]) {

                //hides matched cards
                var tileOne = document.getElementById(CardIds[0]);
                tileOne.style.visibility = 'hidden'

                var tileTwo = document.getElementById(CardIds[1]);
                tileTwo.style.visibility = 'hidden'

                // cards flipped counted
                cardsFlipped += 2;

                //clears arrays
                Values = [];

                CardIds = [];

                // If statement to see if game has been completed if cards are matched

                if (cardsFlipped == animalArray.length) {

                    alert("Congrats, you matched all the animals!");

                }

            } else {

                //Flip cards back over if not matched
                function flipBack() {

                    var tileOne = document.getElementById(CardIds[0]);

                    var tileTwo = document.getElementById(CardIds[1]);

                    tileOne.innerHTML = "";

                    tileTwo.innerHTML = "";

                    //clear arrays
                    Values = [];

                    CardIds = [];

                }

                // Both cards have been selected, if they are not a match then are flipped back over
                setTimeout(flipBack, 700);

            }
        }
    }
}


//loads all the cards values (names)
function LoadElements() {

    shuffle(animalArray);
    var card = document.querySelectorAll(".card");

    //loops through cards to use same event listenter

    for (var i = 0; i < card.length; i++) {
        card[i].setAttribute("id", "card_" + i + "_" + animalArray[i]);
    }

}

//event listener for click on div (card)
document.body.addEventListener('click', function (event) {

    if (event.target.className == 'card') {
        var idElement = event.target.id.split("_");

        flipCard(event.target, idElement[2]);

    };

});


