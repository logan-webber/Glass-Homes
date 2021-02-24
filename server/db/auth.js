const connection = require('./connection')
const { generateHash } = require('authenticare/server')

function getUsers (db = connection) {
  return db('users')
    .select()
} 

function createUser (user, db = connection) {
  const newUser = {...user}
  return generateHash(newUser.password)
    .then(passwordHash => {
      newUser.password = passwordHash
      // delete newUser.password
      return db('users').insert(newUser)
    })
}

function userExists (username, db = connection) {
  return db('users')
    .where('username', username)
    .then(users => users.length > 0)
}

function getUserByUsername (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
    .then(user => {
      user.hash = user.password
      delete user.password
      console.log(user)
      return user
    })
}

module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getUsers
}