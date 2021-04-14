let txtExample = document.getElementById("txtExample");

let dvFound = document.getElementById("dvFound");

function calcScores(){
     var stringVals = txtExample.value;
    
     let myArray = stringVals.split(",");
   
    let sum = 0;
    let avg = 0;
  
    
    for (let i=0; i < myArray.length; i++){
      sum += Number(myArray[i]);
      avg = sum / myArray.length;
    }
  
    console.log(sum);
    console.log(avg);

    
    dvResult.innerHTML = "Sum: " + sum;
    dvResultTwo.innerHTML = "Average: " + avg;

    

    document.getElementById('txtExample').value='';
}