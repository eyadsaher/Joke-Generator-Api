const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => {
      let myData = data.json();
      return myData;
    })
    .then((item) => {
      jokeContainer.classList.add("fade");
      jokeContainer.textContent = `${item.joke}`;
    });
};
btn.addEventListener("click", getJoke);
getJoke();
