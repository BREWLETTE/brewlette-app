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
