## Require

require a Node.JS v12 or newest.

require an async function.

require your project.

## Install and Import

install

```batchfile
npm i auth_mojang.js
```

import

```javascript
const mauth = require('auth_mojang.js');
```

or

```javascript
const { login } = require('auth_mojang.js');
```

## Info

```javascript
//import

mauth.info
```

it returns an array.

```javascript
//import

const info = mauth.info;
console.log(info[0]); //Node.JS version
console.log(info[1]); //Module version
console.log(info[2]); //Module kewords(more array)
```

## Login

```javascript
//import

mauth.login('Minecraft', 1, 'username', 'password');
```

# How i get username and uuid using 'login' function?

```javascript
//import

async function login(agname, agver, usrn, pswd) {
    const res = await mauth.login(agname);
    if (res.error) {
        console.error(res.errorMessage);
        return;
    }
    //handle error
    if (!res.selectedProfile) return;
    //if player have'nt Minecraft: Java Edition, return with null.
    const profile = res.selectedProfile;
    console.log(profile.name, profile.id);
    //username and uuid
}
login('Minecraft', 1, 'username', 'password');
```

## Refresh

You can verify AccessToken using this method. and it invalidates accessToken

Q. What is 'AccessToken' ?

A. AccessToken is a randomly generated string!


Q. How i get 'AccessToken' ?

A. You can get using 'login' method!

use

```javascript
res.accessToken
```
!

```javascript
//import

//login method, function name is login

async function refresh(accessToken, clientToken) {
    console.log(await mauth.refresh(accessToken, clientToken));
}

async function caller() {
    const res = await login('Minecraft', 1, 'usrname', 'pword');
    refresh(res.accessToken, res.clientToken);
}
//it returns an json

caller();
```

## Validate

It verifys your accessToken! ...and none invalidate!

```javascript
//import

//login method

async function validate(accessToken, clientToken) {
    if (await mauth.validate(accessToken, clientToken)) {
        console.log('valid');
    } else {
        console.log('invalid');
    }
}

async function caller() {
    res = await mauth.login('...');
    validate(res.accessToken, res.clientToken);
}
caller();
```

## Signout

'Signout' method is invalidates your accessToken using username and password.

```javascript
//import

mauth.signout('username', 'password');
//if successfully signouted, return true
```