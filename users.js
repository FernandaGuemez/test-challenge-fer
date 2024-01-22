// Imports small array of users
// Pretend it's an API request
const users = require("./data");

// Fetches all users
// const getUsers = () => {
//   return users;
// };

// // Filters users by specific ID
// const getUser = (id) => {
//   return users.find((user) => user.id === id);
// };

function getUserById(id) {
  //metodo para buscar arrays
  return users.find((user) => user.id === id);
}

function getUserByUsername(username) {
  return users.find((user) => user.username === username);
}

function validatePassword(userID, password) {
  const user = getUserById(userID);
  return user ? user.password === password : false;
}
// test
console.log(getUserById(2));

module.exports = { getUserById, getUserByUsername, validatePassword };
