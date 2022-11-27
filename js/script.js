
let km_to_do = parseInt(prompt("Insert distance in KM"));

let age = parseInt(prompt("Insert Passenger Age"));

const unit_prize = 0.21;

let prize_ticket = km_to_do * unit_prize;

if (age < 18) {
    prize_ticket = prize_ticket * 0.8;
}

else if (age > 65) {
    prize_ticket = prize_ticket * 0.6;
}

else {
    prize_ticket = prize_ticket;
}

let total_prize = prize_ticket.toFixed(2);
console.log(total_prize);

document.getElementById("ticket_prize").innerHTML = " " + total_prize;