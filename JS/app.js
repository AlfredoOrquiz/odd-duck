'use strict'

/* 

Odd Duck

  - User is presented photos in 3's (3 random pictures at a time) without repeating 
  - User votes on their favorite image by clicking on the photo
  - 25 Match ups per round of voting
  - At the end of the round, display the results
  - In results show
    - How many votes each picture got
    - How many times each picture photo was rendered
    
    Plan
    
    Construtoe - Duck
      - Name
      - Image source
      - Votes
      - Views
      
    Global variables
      - All duck array
      - Counter for the votes (number of matchups)
    Method function
      - Render the goat image in the DOM
        - Can't have 2 of the same duck
      - Random number to use to get goat
      - Display the results
    Event lister
      - Duck clicks
        - Increment the vote
        - Trigger a new set of ducks


 */

console.log('hi');

/* Global variables */

let allDucks = [];

let duckContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.getElementById('Image1');
let image2 = document.getElementById('Image2');
let image3 = document.getElementById('Image3');

let clicks = 0;
let maxClicksAllowed = 25;

/* Constructor */

function Duck(name, src = 'jpg') {
  this.name = name;
  this.src = `./Images/${this.name}.${src}`;
  this.views = 0;
  this.clicks = 0;
  // Duck.allDucksArray.push(this);
}

/* Functions */

function getRandomNumber() {
  return Math.floor(Math.random() * allDucks.length);
}

function renderDucks() {
  let duck1 = getRandomNumber();
  let duck2 = getRandomNumber();
  let duck3 = getRandomNumber();
  console.log(duck1, duck2, duck3);

  while ((duck1 === duck2) || (duck1 === duck3)) {
    duck1 = getRandomNumber();
    while ((duck3 === duck1) || (duck3 === duck2)) {
      duck3 = getRandomNumber();
    }
  } console.log(duck1, duck2, duck3);

  image1.src = allDucks[duck1].src;
  image2.src = allDucks[duck2].src;
  image3.src = allDucks[duck3].src;
  image1.alt = allDucks[duck1].name;
  image2.alt = allDucks[duck2].name;
  image3.alt = allDucks[duck3].name;
  allDucks[duck1].views++;
  allDucks[duck2].views++;
  allDucks[duck3].views++;
}
console.log(allDucks);
console.log(image1);

function handleDuckClick(event) {
  if (event.target === duckContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickDuck = event.target.alt;
  for (let i = 0; i < allDucks.length; i++) {
    if (clickDuck === allDucks[i].name) {
      allDucks[i].clicks++;
      break;
    }
  }
  renderDucks();
  if (clicks === maxClicksAllowed) {
    resultButton.className = 'clicks-allowed';
    duckContainer.removeEventListener('click', handleDuckClick);
    resultButton.addEventListener('click', renderResults);
    duckContainer.className = 'no-voting';
  } else {
    renderDucks();
  }
}

function handleButtonClick() {
  if (click === clickAllowed) {
    renderResults();
  }
}

function renderResults() {

  /* For each Duck in my array, I need to generate an LI
  for EX: name had X views and was clicked X times*/
  
  let ul = document.querySelector('ul');
  for (let i = 0; i < allDucks.length; i++) {
    let li= document.createElement('li')
    li.textContent = `${allDucks[i].name} had 
    ${allDucks[i].views} view and was clicked 
    ${allDucks[i].clicks} times.`;
    ul.appendChild(li);
  }
}

/* Executable code*/

let bag = new Duck ('bag');
let banana = new Duck ('banana');
let bathroom = new Duck ('bathroom');
let boots = new Duck ('boots');
let breakfast = new Duck ('breakfast');
let bubblegum = new Duck ('bubblegum');
let chair = new Duck ('chair');
let cthulhu = new Duck ('cthulhu');
let dogduck = new Duck ('dog-duck');
let dragon = new Duck ('dragon');
let pen = new Duck ('pen');
let petsweep = new Duck ('pet-sweep');
let scissors = new Duck ('scissors');
let shark = new Duck ('shark');
let sweep = new Duck ('sweep', 'png');
let tauntaun = new Duck ('tauntaun');
let unicorn = new Duck ('unicorn');
let watercan = new Duck ('water-can');
let wineglass = new Duck ('wine-glass');

allDucks.push(bag, banana, bathroom, boots, 
  breakfast, bubblegum, chair, cthulhu, dogduck, dragon, 
  pen, petsweep, scissors, shark, sweep, tauntaun, 
  unicorn, watercan, wineglass);

  console.log(allDucks.name);
  console.log(bag.name);

renderDucks();

duckContainer.addEventListener('click', handleDuckClick);

// if (clicks === clickallowed) {
//   myButton.className = 'clicks-allowed';
//   myContainer.removeEventListener('click', handleDuckClick);
//   myButton.addEventListener('click', handleButtonClick);
//   myButton.addEventListener('click', handleButtonClick);
// }

// functionhandleButtonClick(event) {
//   if (clicks === clickAllowed) {
//     renderResults();
//   }
// }

// function renderResults() {
//   let ul = document.querySelector('ul');
//   for (let i = 0; i < allDucks.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allDucks[i].name} had ${allDucks[i].views} 
//     views and was clicked on ${allDucks[i].clicks} times`;
//     ul.appendChild(li);
//   }
// }