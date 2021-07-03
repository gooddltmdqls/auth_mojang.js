const function_login = require('./functions/login.js');
const function_refresh = require('./functions/refresh.js');
const function_validate = require('./functions/validate.js');
const function_signout = require('./functions/signout.js');
const fs = require('fs');

const login = function(name, version, username, password, requestUser) {
    return function_login(name, version, username, password, requestUser);
}
const refresh = function(accessToken, clientToken) {
    return function_refresh(accessToken, clientToken);
}
const validate = function(accessToken, clientToken) {
    return function_validate(accessToken, clientToken);
}
const signout = function(username, password) {
    return function_signout(username, password);
}

module.exports = {
    login: login,
    refresh: refresh,
    validate: validate
    signout: signout
}