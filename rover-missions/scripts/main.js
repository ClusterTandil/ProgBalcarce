import { api } from "../api/api.js";

import { rovers } from '../lib/rovers.js';
import { drawRoverCard } from "../lib/drawRoverCard.js";

const roversContainer = document.getElementById("roversContainer");
const spinner = document.getElementById("spinner");



// renderRoverInfo(rovers.spirit.name)
//     .then(() => renderRoverInfo(rovers.opportunity.name))
//     .then(() => renderRoverInfo(rovers.curiosity.name))
//     .then(() => renderRoverInfo(rovers.perseverance.name));

async function fetchRovers() {
    const listOfRovers = await Promise.all([
        api.getRoverInfo(rovers.Spirit.name),
        api.getRoverInfo(rovers.Opportunity.name),
        api.getRoverInfo(rovers.Curiosity.name),
        api.getRoverInfo(rovers.Perseverance.name),
    ]);
    return listOfRovers;
}

const allRovers = await fetchRovers();


for (let rover of allRovers) {
    drawRoverCard(rover.rover);

}