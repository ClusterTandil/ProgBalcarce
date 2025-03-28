const photosContainer = document.getElementById("photos-container");

export default async function createPhotoCard(photo) {

    //draw Bootstrap card component and append to the DOM
    const card = document.createElement("article");
    card.classList.add("card", "py-2");
    card.style.width = "18rem"; //set card width
    card.innerHTML = `
    <img src="${photo.img_src}" class="card-img-top photo-from-rover photo-from-rover" alt="photo id:${photo.id}>
     <div class="card-body">
     <p>${photo.camera.full_name}</p>

   
    </div>
    `;
    photosContainer.appendChild(card);
}