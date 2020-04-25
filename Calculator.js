
// function clearScreen()
// {
//   document.getElementById("result").textContent = 0;

// }











function printSymbol(e)
{
let result = document.getElementById("result");
let obj = e.target;

 result.textContent = result.textContent + obj.textContent;

}




function printDigit(e)
{
let result = document.getElementById("result");
let obj = e.target;

if (result.textContent == 0)
result.textContent = obj.textContent;
else
 result.textContent = result.textContent  + obj.textContent;

}






let result = document.getElementById("result");

let num0 = document.getElementById("num0");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let sub = document.getElementById("sub");
let plus = document.getElementById("plus");
let mult = document.getElementById("mult");
let div = document.getElementById("div");
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");


num0.addEventListener("click", printDigit);
num1.addEventListener("click", printDigit);
num2.addEventListener("click", printDigit);
num3.addEventListener("click", printDigit);
num4.addEventListener("click", printDigit);
num5.addEventListener("click", printDigit);
num6.addEventListener("click", printDigit);
num7.addEventListener("click", printDigit);
num8.addEventListener("click", printDigit);
num9.addEventListener("click", printDigit);
sub.addEventListener("click", printSymbol);
plus.addEventListener("click", printSymbol);
mult.addEventListener("click", printSymbol);
div.addEventListener("click", printSymbol);
decimal.addEventListener("click", printSymbol);

clear.addEventListener("click", () => document.getElementById("result").textContent = 0);

equal.addEventListener("click", e => result.textContent = eval(result.textContent) );

//clear.addEventListener("click" clearScreen);
