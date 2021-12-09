const table = document.querySelector(".starWarsTable");
const tbody = document.querySelector("tbody");

let characters = [];

const starWarsApi = async () => {
  try {
    const firstResponse = await fetch("https://swapi.dev/api/films/1/");
    const firstData = await firstResponse.json();
    const charactersApis = firstData.characters;
    charactersInfo(charactersApis);
    console.log(charactersApis);
  } catch (error) {
    console.log(error);
  }
};
starWarsApi();

const charactersInfo = async (arr) => {
  try {
    for (let i = 0; i < 10; i++) {
      let characterData = await (await fetch(arr[i])).json();
      let { name, height, hair_color, homeworld } = characterData;
      let world = await (await fetch(homeworld)).json();
      tbody.innerHTML += 
      `<tr>
      <td>${name}</td>
      <td>${height}</td>
      <td>${hair_color}</td>
      <td>${world.name}</td>
      <td>${world.population}</td>
      </tr>`;
    }
    console.log(characters);
  } catch (error) {
    console.log(error);
  }
};

