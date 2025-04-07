// Global state
let currentPage = 1;
let apiInfo = null;
let characterModal = null;

// DOM Elements
const charactersGrid = document.getElementById('characters-grid');
const loadingSpinner = document.getElementById('loading-spinner');
const errorMessage = document.getElementById('error-message');
const pagination = document.getElementById('pagination');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const filterForm = document.getElementById('filter-form');
const nameFilter = document.getElementById('name-filter');
const statusFilter = document.getElementById('status-filter');
const speciesFilter = document.getElementById('species-filter');
const genderFilter = document.getElementById('gender-filter');
const resetFiltersBtn = document.getElementById('reset-filters');
const characterModalElement = document.getElementById('character-modal');
const characterModalLabel = document.getElementById('character-modal-label');
const characterModalContent = document.getElementById('character-modal-content');

// Initialize Bootstrap modal
document.addEventListener('DOMContentLoaded', () => {
  characterModal = new bootstrap.Modal(characterModalElement);
  
  // Fetch initial data
  fetchCharacters();
  
  // Set up event listeners
  prevPageBtn.addEventListener('click', handlePrevPage);
  nextPageBtn.addEventListener('click', handleNextPage);
  filterForm.addEventListener('submit', handleFilterSubmit);
  resetFiltersBtn.addEventListener('click', resetFilters);
});

// Fetch characters from API
async function fetchCharacters() {
  showLoading(true);
  hideError();
  
  try {
    // Build URL with filters
    let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
    
    const queryParams = new URLSearchParams();
    if (nameFilter.value) queryParams.append('name', nameFilter.value);
    if (statusFilter.value) queryParams.append('status', statusFilter.value);
    if (speciesFilter.value) queryParams.append('species', speciesFilter.value);
    if (genderFilter.value) queryParams.append('gender', genderFilter.value);
    
    const queryString = queryParams.toString();
    if (queryString) {
      url += `&${queryString}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Error fetching characters');
    }
    
    const data = await response.json();
    apiInfo = data.info;
    
    // Update pagination
    updatePagination();
    
    // Render characters
    renderCharacters(data.results);
    
  } catch (error) {
    console.error('Error:', error);
    showError();
    clearCharacters();
  } finally {
    showLoading(false);
  }
}

// Render characters to the grid
function renderCharacters(characters) {
  clearCharacters();
  
  characters.forEach(character => {
    const characterCard = createCharacterCard(character);
    charactersGrid.appendChild(characterCard);
  });
}

// Create a character card element
function createCharacterCard(character) {
  const col = document.createElement('div');
  col.className = 'col-sm-6 col-md-4 col-lg-3';
  
  // Status indicator color
  let statusClass = 'status-unknown';
  if (character.status.toLowerCase() === 'alive') {
    statusClass = 'status-alive';
  } else if (character.status.toLowerCase() === 'dead') {
    statusClass = 'status-dead';
  }
  
  col.innerHTML = `
    <div class="card h-100 bg-dark border-secondary" data-character-id="${character.id}">
      <div class="character-image-container">
        <img src="${character.image}" alt="${character.name}" class="character-image">
      </div>
      <div class="card-body">
        <h5 class="card-title text-truncate">${character.name}</h5>
        <p class="card-text">
          <span class="status-indicator ${statusClass}"></span>
          ${character.status} - ${character.species}
        </p>
        <p class="card-text text-truncate">
          Origin: ${character.origin.name}
        </p>
        <p class="card-text text-truncate">
          Location: ${character.location.name}
        </p>
      </div>
    </div>
  `;
  
  // Add click event to open modal
  const card = col.querySelector('.card');
  card.addEventListener('click', () => openCharacterModal(character));
  
  return col;
}

// Open character modal with details
function openCharacterModal(character) {
  // Status indicator color
  let statusClass = 'status-unknown';
  if (character.status.toLowerCase() === 'alive') {
    statusClass = 'status-alive';
  } else if (character.status.toLowerCase() === 'dead') {
    statusClass = 'status-dead';
  }
  
  // Set modal title
  characterModalLabel.textContent = character.name;
  
  // Set modal content
  characterModalContent.innerHTML = `
    <div class="row">
      <div class="col-md-5 mb-3 mb-md-0">
        <img src="${character.image}" alt="${character.name}" class="modal-character-image">
      </div>
      <div class="col-md-7">
        <div class="mb-3">
          <p class="mb-2">
            <span class="status-indicator ${statusClass}"></span>
            <span class="fs-5">${character.status} - ${character.species}</span>
          </p>
        </div>
        
        ${character.type ? `
        <div class="mb-3">
          <h6 class="card-title">Type</h6>
          <p class="card-text">${character.type}</p>
        </div>
        ` : ''}
        
        <div class="mb-3">
          <h6 class="card-title">Gender</h6>
          <p class="card-text">${character.gender}</p>
        </div>
        
        <div class="mb-3">
          <h6 class="card-title">Origin</h6>
          <p class="card-text">${character.origin.name}</p>
        </div>
        
        <div class="mb-3">
          <h6 class="card-title">Last known location</h6>
          <p class="card-text">${character.location.name}</p>
        </div>
        
        <div class="mb-3">
          <h6 class="card-title">Number of episodes</h6>
          <p class="card-text">${character.episode.length}</p>
        </div>
      </div>
    </div>
  `;
  
  // Show modal
  characterModal.show();
}

// Update pagination controls
function updatePagination() {
  if (!apiInfo) {
    prevPageBtn.disabled = true;
    nextPageBtn.disabled = true;
    currentPageSpan.textContent = '1';
    totalPagesSpan.textContent = '1';
    return;
  }
  
  prevPageBtn.disabled = !apiInfo.prev;
  nextPageBtn.disabled = !apiInfo.next;
  currentPageSpan.textContent = currentPage.toString();
  totalPagesSpan.textContent = apiInfo.pages.toString();
}

// Handle previous page button click
function handlePrevPage() {
  if (apiInfo && apiInfo.prev) {
    currentPage--;
    fetchCharacters();
    window.scrollTo(0, 0);
  }
}

// Handle next page button click
function handleNextPage() {
  if (apiInfo && apiInfo.next) {
    currentPage++;
    fetchCharacters();
    window.scrollTo(0, 0);
  }
}

// Handle filter form submission
function handleFilterSubmit(event) {
  event.preventDefault();
  currentPage = 1; // Reset to first page when applying filters
  fetchCharacters();
}

// Reset all filters
function resetFilters() {
  nameFilter.value = '';
  statusFilter.value = '';
  speciesFilter.value = '';
  genderFilter.value = '';
  
  currentPage = 1;
  fetchCharacters();
}

// Show or hide loading spinner
function showLoading(isLoading) {
  if (isLoading) {
    loadingSpinner.classList.remove('d-none');
    charactersGrid.classList.add('d-none');
    pagination.classList.add('d-none');
  } else {
    loadingSpinner.classList.add('d-none');
    charactersGrid.classList.remove('d-none');
    pagination.classList.remove('d-none');
  }
}

// Show error message
function showError() {
  errorMessage.classList.remove('d-none');
  pagination.classList.add('d-none');
}

// Hide error message
function hideError() {
  errorMessage.classList.add('d-none');
}

// Clear all characters from the grid
function clearCharacters() {
  charactersGrid.innerHTML = '';
}