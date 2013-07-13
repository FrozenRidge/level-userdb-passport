level-userdb-passport
=====================

PassportJS helpers for storing users in [level-userdb](https://github.com/FrozenRidge/level-userdb)

## Installing

`npm install level-userdb-passport`

## Using

These are designed to be used with the `passport-local` LocalStrategy. Module expects to be passed a `level-userdb`
instance.

```javascript

var db = require('level-userdb')()
var helpers = require('level-userdb-passport')(db)
var LocalStrategy = require('passport-local').LocalStrategy
var Passport = // ...


Passport.use(new LocalStrategy({usernameField:'email'}, helpers.localStrategyVerify))
Passport.deserializeUser(helpers.deserializeUser)
Passport.serializeUser(helpers.serializeUser)

```
