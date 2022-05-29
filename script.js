"use strict";

let message_id = 0;
const messages = document.querySelector(".messages");

let question_number = 0;
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const accept_button = document.querySelector(".accept");

newQuestion();

function newQuestion() {
  question_number = getRandomInt(0, 323);

  if (pytania_rzym[question_number].question === "Proces cywilny w prawie rzymskim") newQuestion();

  question.innerText = pytania_rzym[question_number].question;
  answers.innerHTML = "";
  for (let i = 0; i < pytania_rzym[question_number].answers.length; i++) {
    addAnswer(pytania_rzym[question_number].answers[i], i);
  }

  accept_button.innerText = "Potwierdź";
  accept_button.removeEventListener("click", newQuestion);
  accept_button.addEventListener("click", checkQuestion);
}

function addAnswer(text, i) {
  const option = document.createElement("div");
  option.className = "option";

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `opt${i}`);
  checkbox.className = "opt";

  const label = document.createElement("label");
  label.setAttribute("for", `opt${i}`);
  label.innerText = text;

  option.appendChild(checkbox);
  option.appendChild(label);

  answers.appendChild(option);
}

function checkQuestion() {
  const checked_answers = document.querySelectorAll(".opt:checked");
  if (checked_answers.length < 1) {
    addMessage("Wybierz odpowiedź bleblusiu", message_id, 0);
    return;
  }

  let good_answers = 0;
  let bad_answers = 0;
  const user_answers = document.querySelectorAll(".opt");
  const poprawne = pytania_rzym[question_number].poprawne;

  for (let i = 0; i < user_answers.length; i++) {
    if (user_answers[i].checked) {
      let good = 0;
      for (let j = 0; j < poprawne.length; j++) if (poprawne[j] == i) good = 1;

      if (good) {
        user_answers[i].parentElement.style.color = "rgb(1, 184, 1)";
        good_answers++;
      } else {
        user_answers[i].parentElement.style.color = "red";
        bad_answers++;
      }
    } else {
      let bad = 0;
      for (let j = 0; j < poprawne.length; j++) if (poprawne[j] == i) bad = 1;

      if (bad) {
        user_answers[i].parentElement.style.color = "rgb(243, 208, 10)";
        bad_answers++;
      }
    }
  }

  if (good_answers == poprawne.length && bad_answers == 0) addMessage("Tak trzymać!!", message_id, 1);
  else if (good_answers > 0 && bad_answers > 0) addMessage("Prawie się udało, nie poddawaj się", message_id, 0);
  else addMessage("Źle, przyłóż sie", message_id, 0);

  accept_button.innerText = "Losuj pytanie";
  accept_button.removeEventListener("click", checkQuestion);
  accept_button.addEventListener("click", newQuestion);
}

function addMessage(text, id, type) {
  const message = document.createElement("div");
  message.setAttribute("id", `m${id}`);
  message.className = type ? "good" : "bad";
  message.innerText = text;

  messages.appendChild(message);
  message_id++;

  setTimeout(() => deleteMessage(id), 1500);
}

function deleteMessage(id) {
  const message = document.querySelector(`#m${id}`);
  message.remove();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
