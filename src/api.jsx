export const API_URL = 'https://dogsapi.origamid.dev/json'

export async function POST(body, url, token) {
    if ((token !== undefined && body === null) || (token !== null && body === null)) {
        const request = {
            url: API_URL + url,
            options: {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            },
        };

        const response = await fetch(request.url, request.options);
        const json = await response.json();
        return json;

    } else {
        const request = {
            url: API_URL + url,
            options: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            },
        };

        const response = await fetch(request.url, request.options);
        const json = await response.json();
        return json;
    }
}

export async function GET(token, url, body) {
    if (body !== undefined || body !== null) {
        const requestWithBody = {
            url: API_URL + url,
            options: {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token
                },
                body: JSON.stringify(body)
            },
        };

        const response = await fetch(requestWithBody.url, requestWithBody.options);
        const json = await response.json();
        return json;

    } else {
        const request = {
            url: API_URL + url,
            options: {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token
                },
            },
        };

        const response = await fetch(request.url, request.options);
        const json = await response.json();
        return json;
    }
}