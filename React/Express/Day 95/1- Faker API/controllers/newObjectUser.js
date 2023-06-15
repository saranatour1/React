const { faker } = require("@faker-js/faker");
const createUser = () => {
  const user = {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    LastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number(),
  };
  return user;
};

module.exports = {
  createUser: createUser,
};
