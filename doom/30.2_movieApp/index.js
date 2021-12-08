const textInput = document.querySelector(".movieName");
const submitBtn = document.querySelector(".submit");
const error = document.querySelector(".error");

const container = document.createElement("div");
container.classList.add("filmContainer");

submitBtn.addEventListener("click", () => {
  container.innerHTML = "";
  const movieUrl = `http://www.omdbapi.com/?apikey=19bed78d&t=${textInput.value}`;
  const myFunc = async () => {
    try {
      const respons = await fetch(movieUrl);
      const data = await respons.json();
      if (data.Response === "False") {
        error.textContent = "Sorry, We dont have that movie";
      } else {
        datafunc(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  myFunc();
});
const datafunc = async (data) => {
  console.log(data);
  const img = data.Poster;
  const movieTitle = data.Title;
  const genre = data.Genre;
  const year = data.Year;
  const plot = data.Plot;

  container.innerHTML = `    
  <div class="img" style="background-image: url(${img})"></div>
  <h1 class="movieTitle">${movieTitle}</h1>
  <div class="genre">Genre: ${genre}</div>
  <div class="year">Year: ${year}</div>
  <div class="plot">${plot}</div>`;
  document.body.appendChild(container);
};
