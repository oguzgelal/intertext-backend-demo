const delay = () => {
  return new Promise((r) => {
    setTimeout(r, 1000);
  });
};

const users = [
  {
    email: "test@test.com",
    password: "test123",
    token: "test-user-123",
  },
];

module.exports = {
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
};
