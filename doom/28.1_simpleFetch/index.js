const btn = document.querySelector(".generate");
const p = document.querySelector(".joke");
const h = document.querySelector("h2");
let theJoke = "";

btn.addEventListener("click", () => {
  fetch("https://api.jokes.one/jod")
    .then((response) => {
      return response.json();
    })
    .then((val) => {
      theTitle = val.contents.jokes[0].joke.title;
      h.textContent = theTitle
      theJoke = val.contents.jokes[0].joke.text;
      p.textContent = theJoke;
    });
});
