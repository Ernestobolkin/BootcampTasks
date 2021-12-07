const btn = document.querySelector(".generate");
const p = document.querySelector(".joke");
const h = document.querySelector("h2");
let theJoke = "";

btn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.jokes.one/jod");
    const data = await response.json();
    h.textContent = data.contents.jokes[0].joke.title;
    p.textContent = data.contents.jokes[0].joke.text;
  } catch (error) {
    p.textContent = `somthing went wrong, please try agaun later, the error :${error}`;
    console.log(error);
  }
});
