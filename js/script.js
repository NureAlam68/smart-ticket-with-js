const seatSelected = document.getElementById('seat-selected');
const seatBooked = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field');
const couponBtnEl = document.getElementById('coupon-btn');


let totalBooked = [];
let totalPrice = 0;

function handleSelectSeat(event) {
    event.classList.add('bg-color-one', 'text-white')

        seatSelected.innerHTML += `
        <li class= "text-base flex font-normal justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>
        `
        totalBooked.push(event.innerText);
        seatBooked.innerText = totalBooked.length;

        const availableSeatValue = parseFloat(availableSeatEl.innerText);
        const newAvailableSeat = availableSeatValue - 1;
        availableSeatEl.innerText = newAvailableSeat;

        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);

        if(totalBooked.length > 3) {
            couponInputEl.removeAttribute('disabled')
            couponBtnEl.removeAttribute('disabled')
        }
}