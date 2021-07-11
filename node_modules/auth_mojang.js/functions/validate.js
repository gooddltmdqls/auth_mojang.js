const fetch = require('node-fetch');

const validate = function(accessToken, clientToken) {
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
    return promise.then(res => res.ok);
}

module.exports = validate