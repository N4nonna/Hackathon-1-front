//index.HTML
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
//creation resultat
function creaRes(tab) {
  removeImg();
  for (let option of tab) {
    document.querySelector("#resultat").innerHTML += `<div class="result">
                <div class="textResult">${option.depart}>${option.arrive} ${option.heure} ${option.prix}</div>
                <button class="boutonBook">Book</button>
              </div>`;
  }
}

//quand j'appuie sur le bouton search ajoute un element
boutonSearch.addEventListener("click", function () {
  let recherche = {
    depart: document.querySelector("#departure").value,
    arrive: document.querySelector("#arrival").value,
    date: document.querySelector("#searchDate").value,
  };

  let resultat = [
    { depart: "Paris", arrive: "Lyon", heure: "17:30", prix: "115€" },
    { depart: "Paris", arrive: "Lyon", heure: "18:30", prix: "20€" },
  ];

  creaRes(resultat);
});
