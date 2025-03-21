import { api } from './api/api.js';
import { rovers } from './lib/rovers.js';
const roversContainer = document.getElementById("roversContainer");
const spinner = document.getElementById("spinner");

async function renderRoverInfo(roverName) {
    const roverInfo = await api.getRoverInfo(roverName);
    const { name, landing_date, launch_date, status, max_sol, max_date, total_photos } = roverInfo.rover;
    if (roverInfo.error) {
        console.error(`Error: ${roverInfo.status} - ${roverInfo.message}`);
        return;
    }
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.innerHTML = `
    <img src="${rovers[roverName].img}" class="card-img-top mt-2" alt="${roverName}">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p>Launch date: ${roverInfo.rover.launch_date}</p>
    <p>Landing date: ${landing_date}</p>
    <p>Mission status: <span class="${status == "active" ? "text-success" : "text-decoration-line-through"}">${status}</span></p>
    <p>Max Sol: ${max_sol}</p>
    <p>Max date: ${max_date}</p>
    <p>Total photos: ${total_photos}</p>
    </div>
    `;
    spinner.classList.add("d-none");
    roversContainer.appendChild(card);

}

renderRoverInfo(rovers.spirit.name)
    .then(() => renderRoverInfo(rovers.opportunity.name))
    .then(() => renderRoverInfo(rovers.curiosity.name))
    .then(() => renderRoverInfo(rovers.perseverance.name));