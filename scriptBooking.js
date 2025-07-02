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

function changeDate(date) {
  let hour = moment(date).format("HH:MM");
  console.log(hour);
  return hour;
}
//crea ticket train
function ajbooking(tab) {
  creaBooking();
  for (let obj of tab) {
    let date = Date.now();
    // console.log(date);
    let heure = changeDate(date);
    // console.log(heure);
    let time = obj.hour - heure;
    document.querySelector(".bookingContenair").innerHTML += `
            <div class="displayBooking">
              <div class="textBooking">
                <p class="trajet">${obj.departure}>${obj.arrival}</p>
                <p class="heure">${obj.hour}</p>
                <p class="prix">${obj.price}€</p>
                <p class="tempsDepart">Departure in ${time}</p>
              </div>
            </div>`;
  }
}

// let test = [
//   {
//     departure: "Paris",
//     arrival: "Lyon",
//     hour: "18:45",
//     price: "110",
//   },
//   {
//     departure: "Paris",
//     arrival: "Lyon",
//     hour: "19:45",
//     price: "110",
//   },
// ];

ajbooking(test);
fetch("http://localhost:3000/bookings")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    ajbooking(data);
  });
