const seatSelected = document.getElementById('seat-selected')

function handleSelectSeat(event) {
        seatSelected.innerHTML = `
        <li class= "text-base flex font-normal justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>
        `
}