// local reviews data
const our_team = [
  {
    id: 1,
    name: "Mohammed Qasem",
    job: "Student",
    img:"https://res.cloudinary.com/duj148hkp/image/upload/v1637938107/703fe2d7_yr2rji.jpg",
      
    text:
      "Ich stdiere an Hochshule Darmstdt, interssiere mich für Web Entwicklung und Security",
  },
  {
    id: 2,
    name: "Mohammed with hair",
    job: "EX Student",
    img:"https://res.cloudinary.com/duj148hkp/image/upload/v1637940534/B8FFB004-18F0-4F7B-9BFC-802415909ACB_qogyik.jpg",
    text:
      "JAA IT'S MEE Again, did you miss me ?",
  },
  {
    id: 3,
    name: "it's me again",
    job: "Arabeitlos",
    img:"https://res.cloudinary.com/duj148hkp/image/upload/v1637940534/C2D27543-3D63-43C2-87AB-4B00CD215953_rbmjoo.jpg",
    text:
      "JAA IT'S MEE Again, did you miss me ?",
  },
  {
    id: 4,
    name: "Sanji",
    job: "Stalker und Koch",
    img:"https://res.cloudinary.com/duj148hkp/image/upload/v1637940603/res-console.cloudinary_vxkc0s.jpg",
      
    text:
      "Namiiiiiiiiiii chhhan <3",
  },

];
// Select Items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currenItem = 0;

// load intial iteam
window.addEventListener("DOMContentLoaded", function(){
  showPerson(currenItem);
});

// show person based on Item
function showPerson(person){
    const item = our_team[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

// show next person
nextBtn.addEventListener("click", function(){
    currenItem++;
    if(currenItem > our_team.length -1){
        currenItem = 0;
    } 
    showPerson(currenItem);
});

//show prev person
prevBtn.addEventListener("click", function(){
    currenItem--;
    if(currenItem < 0){
        currenItem = our_team.length -1;
    } 
    showPerson(currenItem);
});

//show random Person
randomBtn.addEventListener('click', function(){
    currenItem = Math.floor(Math.random() * our_team.length);
    showPerson(currenItem);
});

