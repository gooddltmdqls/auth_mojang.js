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

## Login

```javascript
//import

mauth.login('Minecraft', 1, 'username', 'password');
```

# How i get username and uuid using 'login' function?

```javascript
//import

mauth.login('Minecraft', 1, 'username', 'password').then(function(res) {
    if (!res.selectedProfile) return;
    //if this acc have'nt Minecraft: Java Edition, return with none
    console.log(res.selectedProfile.name, res.selectedProfile.id);
});
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

mauth.login('Minecraft', 1, 'username', 'password').then(function(res) {
    mauth.refresh(res.accessToken, res.clientToken).then(function(res1) {
        console.log(res1);
    });
});
```

## Validate

It verifys your accessToken! ...and none invalidate!

```javascript
//import

mauth.login('Minecraft', 1, 'username', 'password').then(function(res) {
    mauth.validate(res.accessToken, res.clientToken).then(function(res1) {
        if (res1) {
            console.log('valid');
        } else {
            console.log('invalid');
        }
    });
    //it returns valid
});
```

## Signout

'Signout' method is invalidates your accessToken using username and password.

```javascript
//import

mauth.signout('username', 'password').then(function(res) {
    //your method
});
```