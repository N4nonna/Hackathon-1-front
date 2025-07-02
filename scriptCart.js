//pour nouvel element

function ajouterCart(obj) {
  document.querySelector("#centreCart").innerHTML = "";
  document
    .querySelector("#centreCart")
    .setAttribute("style", "justify-content: space-between");
  document.querySelector(
    "#centreCart"
  ).innnerHTML += `<p id="myCart">My Cart</p>
          <div class="ticketContenair"></div>
           <div id="achat">
            <div id="total">total=prix</div>
            <button id="purch">Purchase</button>
          </div>`;

  document.querySelector(
    ".ticketContenair"
  ).innerHTML += `<div class="displayTicket">
              <div class="textTicket">${obj.departure}>${obj.arrival} ${obj.date} ${obj.price}</div>
              <button class="croixSuppr">X</button>
            </div>`;
}

fetch("http://localhost:3000");
