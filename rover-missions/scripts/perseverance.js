import { api } from "../api/api.js";
import drawPhotoCard from "../lib/drawPhotoCard.js";
const manifest = await api.getRoverManifest("Perseverance");
const spinner = document.getElementById("spinner");
spinner.classList.toggle("d-none");
const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
form.classList.toggle("d-none");
const solNumberLabel = document.getElementById("sol-number-label");
solNumberLabel.innerText += ` 1 - ${manifest.photo_manifest.max_sol}`;
const solNumberInput = document.getElementById("sol-number-input");
solNumberInput.setAttribute("max", manifest.photo_manifest.max_sol);
solNumberInput.placeholder = `1 - ${manifest.photo_manifest.max_sol}...`;
const photosContainer = document.getElementById("photos-container");

async function handleSubmit(e) {
    e.preventDefault();
    const photos = await api.getPhotosFromRover("Perseverance", solNumberInput.value);
    photosContainer.replaceChildren();
    for (let photo of photos) {
        drawPhotoCard(photo);
    }
}