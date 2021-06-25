/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const randomIndex = lengthOfArray => {
    return Math.floor(Math.random() * lengthOfArray);
  };

  console.log(who[randomIndex(who.length)]);
  console.log(action[randomIndex(action.length)]);
  console.log(what[randomIndex(what.length)]);
  console.log(when[randomIndex(when.length)]);
  document.getElementById("excuse").innerHTML =
    who[randomIndex(who.length)] +
    " " +
    action[randomIndex(action.length)] +
    " " +
    what[randomIndex(what.length)] +
    " " +
    when[randomIndex(when.length)];
};
