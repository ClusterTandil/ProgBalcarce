const API_KEY = "wyzaxWHc5lTTwL89niL118KKMB5cmODBVzQhMGI7";
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1";

export const api = {
    async getRoverInfo(roverName) {
        try {
            const url = `${BASE_URL}/rovers/${roverName}?api_key=${API_KEY}`;
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP Error. Status: ${res.status}`);
            }
            const data = await res.json();
            return data;
        } catch (err) {
            console.error(err);
            return { error: true, status: err.status, message: err.message };
        }
    },
    async getRoverManifest(roverName) {
        const url = `${BASE_URL}/manifests/${roverName}?api_key=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error();
            }
            const manifest = await response.json();
            return manifest;
        }
        catch (error) {
            console.error("Error fetching rover info:", error);
            return null;
        }
    },
    async getPhotosFromRover(roverName, solNumber) {
        const url = `${BASE_URL}/rovers/${roverName}/photos?sol=${solNumber}&api_key=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error();
            }
            const { photos } = await response.json();
            return photos;
        }
        catch (error) {
            console.error("Error fetching photos:", error);
            return null;
        }
    }
};
