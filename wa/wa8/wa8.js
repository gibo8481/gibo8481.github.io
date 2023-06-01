// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

// It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and crawled away
const storyText ='In a nonsensical land, there lived :insertx: with a penchant for wearing :inserty: on their head. One day, it was 94 fahrenheit outside, so :insertx: went for a walk. They stumbled open a magical potion that turned everything they touched into :insertz:. Armed with their newfound power, they embarked on a ridiculous adventure, turning trees, rocks, and even their sworn enemy, Carl into :insertz: along the way.';
const insertX =["Billy the Penguin","Queen Elizabeth","Big Bird"];
const insertY = ["feathers", "old socks", "drag queen wigs"];
const insertZ = ["stinky cheese","jello","a rabbit"];



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

let newStory = storyText;

const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertx:", xItem).replace(":insertz:", zItem).replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Carl",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone'; // convert pounds to stones
    const temperature =  Math.round((94 - 32) * (5/9)) + ' centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}