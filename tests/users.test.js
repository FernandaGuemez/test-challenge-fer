// You already have the methods imported

const {
  getUserById,
  getUserByUsername,
  validatePassword,
} = require("../users");

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

describe("User functions test", () => {
  it("Should get the user by its", () => {
    const user = getUserById(2);
    expect(user).toEqual({
      id: 2,
      username: "spiderman",
      email: "parkerdapete@gmail.com",
      password: "2D$aLzX9(_2",
    });
  });
});
