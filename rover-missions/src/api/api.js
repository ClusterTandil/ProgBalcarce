const API_KEY = "wyzaxWHc5lTTwL89niL118KKMB5cmODBVzQhMGI7";
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

export const api = {
    async getRoverInfo(roverName) {
        try {
            const url = `${BASE_URL}/${roverName}?api_key=${API_KEY}`;
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
    }
};
