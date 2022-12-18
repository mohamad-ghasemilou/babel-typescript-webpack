import "./styles.scss"

const counter = document.getElementById("counter");
const incButton = document.getElementById("incrementBtn");

let count = 0;
counter.textContent = count.toString();

incButton.onclick = () => {
    count++;
    counter.textContent = count.toString();
}
