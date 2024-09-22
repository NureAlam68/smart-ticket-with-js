const seatSelected = document.getElementById('seat-selected');
const seatBooked = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field');
const couponBtnEl = document.getElementById('coupon-btn');
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl = document.getAnimations('grand-total');


let totalBooked = [];
let totalPrice = 0;


//seat button function
function handleSelectSeat(event) {
    const value = event.innerText;

    if(totalBooked.includes(value)) {
        return alert('Seat already Booked !')
    }
    else if(totalBooked.length < 4){
        event.classList.add('bg-color-one', 'text-white')

        defaultTextEl.classList.add('hidden')

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
    else {
        return alert('Maximum seat booked !')
    }
    
}


// coupon button function
document.getElementById('coupon-btn').addEventListener('click', function() {
    let couponInputValue = couponInputEl.value;
    let couponSave = 0;

    if(couponInputValue !== "NEW15" && couponInputValue !== "Couple20") {
        return alert('Your Provided Coupon is not valid !');
    }

    if(couponInputValue === "NEW15") {
        couponSave = totalPrice * .15;
    }
    else if(couponInputValue === "Couple20") {
        couponSave = totalPrice * .20;
    }

    const grandTotalValue = totalPrice - couponSave;
    const grandTotalEl = document.getElementById('grand-total');
    grandTotalEl.innerText = grandTotalValue.toFixed(2);
})