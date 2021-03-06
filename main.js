const function_login = require('./functions/login.js');
const function_refresh = require('./functions/refresh.js');
const function_validate = require('./functions/validate.js');
const function_signout = require('./functions/signout.js');
const fs = require('fs');

const package = JSON.parse(fs.readFileSync('./node_modules/auth_mojang.js/package.json'));

const login = async function(name, version, username, password, requestUser) {
    return await function_login(name, version, username, password, requestUser);
}
const refresh = async function(accessToken, clientToken) {
    return await function_refresh(accessToken, clientToken);
}
const validate = async function(accessToken, clientToken) {
    return await function_validate(accessToken, clientToken);
}
const signout = async function(username, password) {
    return await function_signout(username, password);
}

const info = [ process.version, package.version, package.keywords];

module.exports = {
    login: login,
    refresh: refresh,
    validate: validate,
    signout: signout,
    info: info
}