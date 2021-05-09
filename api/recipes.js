const { users, recipes } = require('./data')

const delay = () => {
  return new Promise((r) => {
    // setTimeout(r, 1000);
    setTimeout(r, 0);
  });
};

module.exports = {
  /**
   * Sign in
   */
  signin: async (email, password) => {
    await delay();
    const user = users.filter((u) => u.email === email)[0];
    if (!user) {
      throw new Error("User does not exist");
    } else if (user.password !== password) {
      throw new Error("Incorrect credentials");
    } else {
      return user;
    }
  },

  recipes: async (filters) => {
    await delay();
    return recipes
  }
};
