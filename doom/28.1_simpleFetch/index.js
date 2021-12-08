const btn = document.querySelector(".generate");
const pElement = document.querySelector(".joke");
const hElement = document.querySelector("h2");
let theJoke = "";

btn.addEventListener("click", () => {
  fetch("https://api.jokes.one/jod")
    .then((response) => {
      return response.json();
    })
    .then((val) => {
      theTitle = val.contents.jokes[0].joke.title;
      hElement.textContent = theTitle
      theJoke = val.contents.jokes[0].joke.text;
      pElement.textContent = theJoke;
    });
});
