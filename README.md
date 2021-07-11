##Require

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
const { login, refresh, validate } = require('@icetang0123/mojang-auth');
```

## Info

```javascript
//import

mauth.info
```

it returns an array.

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
    if (res.errorMsg) {
        console.error(res.errorMsg);
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
    console.log(await mauth.refresh(res.accessToken, res.clientToken));
}

const res = await mauth.login('Minecraft', 1, 'username', 'password');
refresh(res.accessToken, res.clientToken);
//it returns an json
```

## Validate

It verifys your accessToken! ...and none invalidate!

```javascript
//import

//login method

async function validate(accessToken, clientToken) {
    const valid = await mauth.validate(accessToken, clientToken);
    if (valid) {
        console.log('valid');
    } else {
        console.log('invalid');
    }
}

const res = login()
```

## Signout

'Signout' method is invalidates your accessToken using username and password.

```javascript
//import

mauth.signout('username', 'password').then(function(res) {
    //your method
});
```