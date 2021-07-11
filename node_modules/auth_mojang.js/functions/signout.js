const fetch = require('node-fetch');

const signout = function(username, password) {
    const body = {
        "username": username,
        "password": password
    }
    
    let promise = fetch('https://authserver.mojang.com/signout', {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return promise.then(res => res.json());
}
module.exports = signout