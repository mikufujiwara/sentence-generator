const sentences = [
  "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
  "I went to buy some camo pants but couldn't find any.",
  "I failed math so many times at school, I can't even count.",
  "I used to have a handle on life, but then it broke.",
  "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
  "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels",
  "I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.",
  "When life gives you melons, you might be dyslexic.",
  "Don't you hate it when someone answers their own questions? I do",
  "It takes a lot of balls to golf the way I do.",
];

const number = document.getElementsByClassName("number")[0];
const form = document.querySelector("form");
const section = document.querySelector("section");

const generator = (e) => {
  e.preventDefault();
  section.innerHTML = "";
  const value = number.value;
  const newSentences = sentences.slice(0, value);

  if (value <= 0 || value > newSentences.length) {
    alert("Put number between 1 to 10!");
  } else {
    newSentences.forEach((sentence) => {
      section.innerHTML += `<p>${sentence}</p>`;
    });
  }

  number.value = "";
};

form.addEventListener("submit", generator);
