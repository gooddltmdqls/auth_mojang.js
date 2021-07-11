const fetch = require('node-fetch');

const login = function(name, version, username, password, requestUser) {
    const agent = {
        "name": name || 'Minecraft',
        "version": version || 1
    }
    const body = {
        "agent": agent,
        "username": username,
        "password": password,
        "requestUser": requestUser || true
    }
    
    let promise = fetch('https://authserver.mojang.com/authenticate', {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return promise.then(res => res.json());
}
module.exports = login