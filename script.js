//index.HTML
// var moment = require("moment");
//bouton search
const boutonSearch = document.querySelector("#searchBouton");

//fonction enleve image
function removeImg() {
  if (document.querySelector("#resultDefault")) {
    document.querySelector("#resultDefault").remove();
  }
}

//si pas de resultat
function changeImg() {
  document.querySelector("#resultDefault").innerHTML = `
    <img id="imgTrain" src="../images/notfound.png" />
              <p>No trip found.</p>`;
}

function changeDate(date) {
  let hour = moment(date).format("HH:MM");
  return hour;
}

//creation resultat
function creaRes(tab) {
  removeImg();
  document.querySelector("#resultat").innerHTML = "";

  document.querySelector("#resultat").setAttribute("style", "display: block");
  document.querySelector("#resultat").setAttribute("style", "overflow:auto");
  for (let option of tab) {
    document.querySelector("#resultat").innerHTML += `
      <div class="result">
        <div class="textResult">
          ${option.departure}>${option.arrival} ${changeDate(option.date)} ${
      option.price
    }€
        </div>
        <button class="boutonBook">Book</button>
      </div>`;
    // console.log(option);let recherche = {
    document.querySelector("#departure").value = "";
    document.querySelector("#arrival").value = "";
    document.querySelector("#searchDate").value = date();
    actionBoutonBook(option);
  }
}

//<a href="./cart.html">

//quand j'appuie sur le bouton search ajoute un element
boutonSearch.addEventListener("click", function () {
  let recherche = {
    departure: document.querySelector("#departure").value,
    arrival: document.querySelector("#arrival").value,
    date: document.querySelector("#searchDate").value,
  };
  // console.log(recherche);

  fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recherche),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === true) {
        console.log(data.trip);
        creaRes(data.trip);
      } else {
        changeImg();
      }
    });
});

//si resultat et click sur book
function actionBoutonBook(id) {
  let boutonsbook = document.querySelectorAll(".boutonBook");
  for (let i = 0; i < boutonsbook.length; i++) {
    boutonsbook[i].addEventListener("click", function () {
      // console.log("j'ai cliqué");
      fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id),
      });
      location.replace("./cart.html");
    });
  }
}
