const URL = 'http://localhost:3000'

export async function getToken(signInInfo, type) {

    const authURL = `${URL}/${type}`; 
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
// export async function getToken(signInInfo, type) {

//     const authURL = `${URL}/signin/${type}`; 
//     const response = await fetch(authURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signInInfo),
//     });
//     const data = await response.json();
//     localStorage.setItem('BREWTOKEN', data.token);
//     return data.token;
// }