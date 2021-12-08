const input = document.querySelector("#userName");
const button = document.querySelector(".generate");
const cardContainer = document.querySelector(".cards");
const error = document.querySelector(".error");

const checkArr = [];

button.addEventListener("click", () => {
  const gitHubName = input.value;

  if (!checkArr.includes(input.value)) {
    checkArr.push(gitHubName)
    console.log(checkArr);
    error.textContent = "";
    async function Myfunc() {
      const url = `https://api.github.com/users/${gitHubName}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          outPutInfo(data);
          // console.log(data);
          error.textContent = "";
        } else {
          error.textContent = "somthig went wrong!!!";
        }
      } catch (error) {
        console.log(error);
      }
    }
    Myfunc();
  }else{
    error.textContent = "you already selected this gitHub user";
  }
});

const outPutInfo = (data) => {
  const userName = data.login;
  const userRepos = data.public_repos;
  const userImge = data.avatar_url;

  const userContiner = document.createElement("div");
  userContiner.classList.add("userContiner");

  userContiner.innerHTML = `<a href="https://github.com/${userName}" target="_blank" > <div class="img" style="background-image: url(${userImge})"></div>
  <h2 class="userName">${userName}</h2>
  <h3 class="repos">${userRepos}</h3></a>`;
  cardContainer.appendChild(userContiner);
};
