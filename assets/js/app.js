const advice = document.querySelector(".advice");
const url = "https://api.adviceslip.com/advice";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    advice.innerText = data["slip"].advice;
  });
