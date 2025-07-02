//clean
function avantbook() {
  document.querySelector("#centreBook").innerHTML = "";
  document.querySelector("#centreBook").setAttribute("style", "space-between");
}

//clean + crea du display
function creaBooking() {
  avantbook();
  document.querySelector(
    "#centreBook"
  ).innerHTML = `<p id="myBook">My Bookings</p>
          <div class="bookingContenair">
          </div>
          <p id="enjoy">Enjoy your travels with TicketHack!</p>`;
}

//crea ticket train
function ajbooking(tab) {
  creaBooking();
  for (let obj of tab)
    document.querySelector(".bookingContenair").innerHTML += `
            <div class="displayBooking">
              <div class="textBooking">
                <p class="trajet">${obj.departure}>${obj.arrival}</p>
                <p class="heure">${obj.date}</p>
                <p class="prix">${obj.price}€</p>
                <p class="tempsDepart">Departure in time</p>
              </div>
            </div>`;
}
