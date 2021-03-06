const fetch = require('node-fetch');

const validate = async function(accessToken, clientToken) {
    const body = {
        "accessToken": accessToken,
        "clientToken": clientToken
    }

    let promise = fetch('https://authserver.mojang.com/validate', {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await promise.then(res => res.ok);
}

module.exports = validate