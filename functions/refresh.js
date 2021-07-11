const fetch = require('node-fetch');

const refresh = async function(accessToken, clientToken) {
    const body = {
        "accessToken": accessToken,
        "clientToken": clientToken
    }

    let promise = fetch('https://authserver.mojang.com/refresh', {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await promise.then(res => res.json());
}

module.exports = refresh