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
let indexArray = [];

let duckContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.getElementById('Image1');
let image2 = document.getElementById('Image2');
let image3 = document.getElementById('Image3');

let votes = 0;
let maxClicksAllowed = 5;

/* Constructor */

function Duck(name, src = 'jpg') {
  this.name = name;
  this.src = `./Images/${this.name}.${src}`;
  this.views = 0;
  this.clicks = 0;
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

  while (indexArray.length < 6) {
    // console.log(indexArray.length);
    let randNum = getRandomNumber();
    // console.log(randNum);
    // console.log(indexArray);
    if (!indexArray.includes(randNum)) {
      indexArray.push(randNum);
      // console.log(indexArray);
    }
  }

  duck1 = indexArray.shift();
  duck2 = indexArray.shift();
  duck3 = indexArray.shift();

  console.log('end result: ', duck1, duck2, duck3);

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
console.log(image2);
console.log(image3);

function handleDuckClick(event) {
  if (event.target === duckContainer) {
    alert('Please click on an image');
    return
  }
  votes++;
  let clickDuck = event.target.alt;
  // console.log(clickDuck);
  for (let i = 0; i < allDucks.length; i++) {
    // console.log(allDucks[i].name);
    if (clickDuck === allDucks[i].name) {
      allDucks[i].clicks++;
      // console.log(allDucks[i].clicks);
      break;
    }
  }

  renderDucks();
  if (votes === maxClicksAllowed) {
    duckContainer.removeEventListener('click', handleDuckClick);
    resultButton.addEventListener('click', handleButtonClick);
  }
}

function handleButtonClick() {
  if (votes === maxClicksAllowed) {
    renderResults();
    console.log('Chart should be inserted after results here.');
    renderChart();
  }
}

function renderResults() {

  /* For each Duck in my array, I need to generate an LI
  for EX: name had X views and was clicked X times*/
  
  let ul = document.querySelector('ul');
  for (let i = 0; i < allDucks.length; i++) {
    let li= document.createElement('li');
    li.textContent = `${allDucks[i].name} had 
    ${allDucks[i].views} view and was clicked 
    ${allDucks[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// Chart code

// console.log(allDucks[0].name)


function renderChart(){

  console.log('Chart should go in here');

    let duckNames = [];
    let duckViews = [];
    let duckClicks = [];
    for (let i = 0; i < allDucks.length; i++) {
      duckNames.push(allDucks[i].name);
      duckViews.push(allDucks[i].views);
      duckClicks.push(allDucks[i].clicks);
    }

    const label = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray'];

    
    const data = {
      label: duckNames,
      datasets: [
        {
        label: 'Clicks',
        data: duckClicks,
        // [65, 59, 80, 81, 56, 55, 40]
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        
        ],
        borderColor: [
          'rgb(255, 99, 132)',
        
        ],
        borderWidth: 1
      },
      {
        label: 'Views',
        data: duckViews,
        // [65, 59, 80, 81, 56, 55, 40]
        backgroundColor: [
        
         'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
    };
    console.log(duckNames);
    console.log(duckViews);
    console.log(duckClicks);

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  
  const myChart = new Chart(
    document.getElementById('myChart').getContext('2d'),
    config
  );
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
// 'rgba(255, 159, 64, 0.2)',
 // 'rgba(255, 205, 86, 0.2)',
 // 'rgba(75, 192, 192, 0.2)',
 // 'rgba(54, 162, 235, 0.2)',
 // 'rgba(153, 102, 255, 0.2)',
 // 'rgba(201, 203, 207, 0.2)'
// 'rgb(255, 159, 64)',
// 'rgb(255, 205, 86)',
// 'rgb(75, 192, 192)',
// 'rgb(54, 162, 235)',
// 'rgb(153, 102, 255)',
// 'rgb(201, 203, 207)'
// 'rgb(255, 99, 132)',
// 'rgb(255, 159, 64)',
// 'rgb(255, 205, 86)',
// 'rgb(75, 192, 192)',
// 'rgb(54, 162, 235)',
// 'rgb(153, 102, 255)',
// 'rgba(255, 99, 132, 0.2)',
// 'rgba(255, 159, 64, 0.2)',
// 'rgba(255, 205, 86, 0.2)',
// 'rgba(75, 192, 192, 0.2)',
// 'rgba(54, 162, 235, 0.2)',
// 'rgba(153, 102, 255, 0.2)',