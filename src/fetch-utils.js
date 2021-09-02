const URL = 'https://the-brewlette.herokuapp.com'

// GET TOKEN FUNCTION
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
    
    localStorage.setItem('BREWTOKEN', JSON.stringify(data.token));
    return data.token;
}

//GET USER BREWERIES
export async function getBreweries(token) {

    const authURL = `${URL}/api/breweries}`; 
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

//ADD BREWERY TO USER
export async function addBrewToUser(token, newBrew) {

    const authURL = `${URL}/api/breweries`; 
    const response = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(newBrew),
    });
    const createdData = await response.json();
    return createdData;
}

//UPDATE USER BREWERY DATA
export async function updateBreweryData(token, favorite) {

    const authURL = `${URL}/api/breweries/${favorite.id}`; 
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
};