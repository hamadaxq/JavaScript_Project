const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//target the Butten 
const btn = document.getElementById('btn');
const color = document.querySelector(".color"); //target Color <SPAN>



btn.addEventListener('click', function(){

   // console.log(document.body); //targetting the <body>
   const randomNumber= getRandomNumber(); //get random Number between 0 - 3

   //console.log(randomNumber);

   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}

