let displayCount = document.getElementById("displayCount");
displayCount.innerHTML = "Type a sentence to filter for bad words.";

let inputSent = document.getElementById("inputSent");

function filterString(){

    let badWord = [ "clear", "water", "tires"];
    
    let userInput = inputSent.value;

    let splitString = userInput.split(" ");

    let badCount = 0;

    for(let i = 0; i < splitString.length; i++){
        for(let x = 0; x < badWord.length; x++){
            if(badWord[x] == splitString[i]){
                badCount++;
                displayCount.innerHTML = "Bad words found: " + badCount;
            }
        }
    }
}


