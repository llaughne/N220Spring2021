var y = 14

document.getElementById("submitguess").onclick = function(){
var x = document.getElementById("txt").value;
if(x == y)
{   
alert("You got it Right!");
}
else if(x > y) 
{   

alert("too high");
document.getElementById("txt").value="";
}
else
{

alert("too low");
document.getElementById("txt").value="";
}
}