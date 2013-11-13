// Create a function to implement PassportJS deserializeUser function.
// Requires a 'level-userdb' instance as parameter.
function mkDeserializeUser(dbi) {
  return function(email, done) {
    function find() {
      dbi.findUser(email, found)
    }
    function found(err, user) {
      done(err, user)
    }
    find()
  }
}

// Create a function to implement PassportJS serializeUser function.
function serializeUser(user, done) {
  done(null, user.email)
}

// Create a function to implement PassportJS-local verify function.
// Requires a 'level-userdb' instance as parameter.
function mkLocalStrategyVerify(dbi) {
  return function(email, password, done) {
    dbi.checkPassword(email, password, function(err, user) {
      if (err) {
        console.log("auth fail for email %s", email)
        return done(null, false, { message: err})
      }
      console.log("auth success for email %s", email)
      return done(null, user)

    })
  }
}


module.exports = function(dbi) {

  return {
    deserializeUser: mkDeserializeUser(dbi),
    serializeUser: serializeUser,
    localStrategyVerify: mkLocalStrategyVerify(dbi),
  }
}
