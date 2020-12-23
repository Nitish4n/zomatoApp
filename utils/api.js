const API_KEY = "ef927de6cc0f1cf2db04db170b532622";
const BASE_URL="https://developers.zomato.com/api/v2.1/";


export function getGeoCodeAPI(lat, lon) {
    return fetch(`${BASE_URL}geocode?lat=${lat}&lon=${lon}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'user-key': API_KEY
        }
    })
    .then(response => response.json())
    .catch(err => err.message)
}