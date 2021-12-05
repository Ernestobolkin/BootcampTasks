const player1 = document.querySelector("#player1-race");
const tdList1 = player1.querySelectorAll("td");
const avatar1 = player1.querySelector(".active");
const finish1 = player1.querySelector(".finish");

const player2 = document.querySelector("#player2-race");
const tblList2 = player2.querySelectorAll("td");
const avatar2 = player2.querySelector(".active");
const finish2 = player2.querySelector(".finish");

const winner = document.querySelector(".winner");
const Textwinner = document.querySelector("h3");
const again = document.querySelector("h2");
const btnYes = document.querySelector(".yes");
const btnNo = document.querySelector(".no");
const body = document.querySelector("body");

// alert("Red Buss Key")
let count1 = 0;
let count2 = 0;
document.addEventListener("keyup", (event) => {
  if (event.key.toLowerCase() === "d") {
    count1++;
    tdList1[count1 - 1].classList.remove("active");
    tdList1[count1].classList.add("active");
    if (tdList1[count1].classList.contains("finish")) {
      setTimeout(()=>{winner1()},1000)
      count1 = undefined;
      count2 = undefined;
    }
  }
  if (event.key.toLowerCase() === "k") {
    count2++;
    tblList2[count2 - 1].classList.remove("active");
    tblList2[count2].classList.add("active");
    if (tblList2[count2].classList.contains("finish")) {
      setTimeout(()=>{winner2()},1000)
      count2 = undefined;
      count1 = undefined;
    }
  }
});

btnNo.addEventListener("click", () => {
  body.style.display = "none";
});

btnYes.addEventListener("click", () => {
  location.reload();
});

const winner1 = () => {
  count1 = undefined;
  count2 = undefined;
  winner.style.visibility = "visible";
  Textwinner.style.color = "#8E0505";
  Textwinner.innerText = "RED BUSS!!!";
  again.innerText = "Would You Like To Play Again?";
};

const winner2 = () => {
  count1 = undefined;
  count2 = undefined;
  winner.style.visibility = "visible";
  Textwinner.innerText = "YELLOW BUSS!!! ";
  again.innerText = "Would You Like To Play Again?";
};
