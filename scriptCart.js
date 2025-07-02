//pour nouvel element
fetch("http://localhost:3000/cart").then(res => res.json()
  .then(dataTrip => {
    if(dataTrip.result) {
      creaCart(dataTrip.travels);
    }
  }))

function avantcart(){
    document.querySelector("#centreCart")
    .innerHTML="";
    document.querySelector("#centreCart")
    .setAttribute("style", "justify-content: space-between");
}

function creaCart(arr){
  avantcart()
  document.querySelector("#centreCart").innerHTML= `<p id="myCart">My Cart</p>
    <div class="ticketContenair"></div>
      <div id="achat">
        <div id="total">Total = <span class='totalPrice'>$</span></div>
        <button id="purch">Purchase</button>
      </div>`;
  ajouterCart(arr);
  actionBoutonPurch();
}

function ajouterCart(arr) {
  let price = 0;
  for (let obj of arr) {
    
    document.querySelector(
      ".ticketContenair"
    ).innerHTML += `<div class="displayTicket">
              <div class="textTicket">
                <p class='travel'>${obj.departure}>${obj.arrival}
                <p class='date'>${obj.date}</p>
                <p class='price'>${obj.price} $</p>
              </div>
              <button class="croixSuppr">X</button>
            </div>`;
    price += obj.price;
  }
  console.log(price)
  document.querySelector(".totalPrice").textContent = price + '$';
}

function actionBoutonPurch() {
  let boutonPurch = document.querySelector("#purch");
  boutonPurch.addEventListener("click", function () {
      console.log("j'ai cliqué");
    fetch("http://localhost:3000/bookings")
      location.replace("./bookings.html");
  });
}

