const URL = 'https://the-brewlette.herokuapp.com'

export async function getToken(signInInfo, type) {

    const authURL = `${URL}/auth/${type}`; 
    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInInfo),
    });
    const data = await response.json();
    localStorage.setItem('BREWTOKEN', data.token);
    return data.token;
}

export async function getBreweries(token) {

    const authURL = `${URL}/api/roulette }`; // confer with Back End <<<<<<<<<<<<<
    const response = await fetch(authURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    });
    const breweryData = await response.json();
    return breweryData;
}

export async function createFavorite(token, favorite) {

    const authURL = `${URL}/api/favorite`; 
    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,

        },
        body: JSON.stringify(favorite),
    });
    const createdData = await response.json();
    return createdData;
}

export async function updateBreweryData(token, favorite) {

    const authURL = `${URL}/api/favorite/${favorite.id}`; // confer with BE <<<<<<<<<<<<<
    const response = await fetch(authURL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify(favorite),
    });
    const updateData = await response.json();
    return updateData;
}