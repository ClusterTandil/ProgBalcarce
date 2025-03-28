import { rovers } from "./rovers.js";
import { dateFormat } from "./dateFormant.js";
import { daysToYMD } from "./daysToYMD.js";
const spinner = document.getElementById("spinner");
const roversContainer = document.getElementById("roversContainer");
export function drawRoverCard(rover) {
    console.log("first");
    const card = document.createElement("article");

    card.classList.add("card", "py-2");
    card.style.width = "18rem"; //set card width
    card.innerHTML = `
    <img src="${rovers[rover.name].img}" class="card-img-top" alt="${rover.name}">
    <div class="card-body">
        <h5 class="card-title"> ${rover.name}</h5>
        <p class="card-text">Earth departure: ${dateFormat(rover.launch_date)}</p>
        <p class="card-text">Mars Landing: ${dateFormat(rover.landing_date)}</p>
        <p>Mission status: <span class="${rover.status == "active" ? "text-success" : "text-decoration-line-through text-danger"}">${rover.status}</span></p>
        <p>Photos taken: ${rover.total_photos.toLocaleString()}</p>
        <p>Last photo: ${dateFormat(rover.max_date)}</p>
        <p>Time on duty: ${rover.max_sol.toLocaleString()} days</p>
    </div>
    `;
    console.log("Card created");
    console.log(card);
    spinner.classList.add("d-none");
    roversContainer.appendChild(card);
}