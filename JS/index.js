
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

    
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");

});

/*
7///////////////////////////////////////777
/////////////////////////////////////////////
My Project
*/

const myProjects = [
  {
    id: 1,
    title: "Password Generator",
    category: "JS",
    link: "PassGenerator.html",
    img: "./img/Pass_generator.png",
    desc: `Password Generator App with JS `,
  },
  {
    id: 2,
    title: "Notes",
    category: "JS",
    link: "notes.html",
    img: "./img/notes.png",
    desc: `Simple Note App `,
  },
  {
    id: 3,
    title: "Counter",
    category: "JS",
    link: "counter.html",
    img: "./img/counter.png",
    desc: `Simple Counter `,
  },
   {
    id: 4,
    title: "Color Flipper",
    category: "JS",
    link: "color.html",
    img: "./img/color.png",
    desc: `Use JS to Flipp the color of the Bckground , there is two versonen one woith simple Color, and the other with HEX Color `,
  },
  {
    id: 5,
    title: "To Do List",
    category: "JS",
    link: "todolist.html",
    img: "./img/todolist.png",
    desc: `Simple to Do List with JS `,
  },
  {
    id: 6,
    title: "ProjectC++",
    category: "C++",
    link: "about.html",
    img: "./img/project.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  
];

const sectionCenter = document.querySelector(".section-center");
const container= document.querySelector(".btn-container");

//load Items
window.addEventListener('DOMContentLoaded', function(){
 //console.log("Fuck off");
  displayMyProjectsItems(myProjects);
  const categories = myProjects.reduce(function(values,item){

    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },['all']);
 // console.log(categories);
 const categoryBtns = categories
 .map(function (category) {
   return `<button type="button" class="filter-btn" data-id=${category}>
       ${category}
     </button>`;
 })
 .join("");
 //console.log(categoryBtns)
 container.innerHTML= categoryBtns;
 const filterBtns = document.querySelectorAll(".filter-btn");
//filter Item
filterBtns.forEach(function(btn){
  btn.addEventListener("click",function(e){

    //console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;

    const myProjectsCategory = myProjects.filter(function(myProjectsItems){
      if(myProjectsItems.category == category){
      return myProjectsItems;
    }
    })
    //console.log(myProjectsCategory);
    if(category == "all"){
      displayMyProjectsItems(myProjects);
    }else{
      displayMyProjectsItems(myProjectsCategory);
    }
  });

});

});




//make filtering easy
function displayMyProjectsItems(myProjectsItems){
  let displayMyProjects = myProjectsItems.map(function(item){

    //console.log(item);
    
    return ` 
    <article class="my-projects-item">
    <img src=${item.img} alt=${item.title} class="photo">
    <div class="item-info">
      <header>             
        <h4>${item.title}</h4>
        <a class ="link" href=${item.link}>click here</a>
      </header>
      <p class="item-text"> ${item.desc}</p>            
    </div>       
    </article>`;
  });
  displayMyProjects = displayMyProjects.join("");
  sectionCenter.innerHTML = displayMyProjects;


}