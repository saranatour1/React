const { faker } = require("@faker-js/faker");
const createProduct = () => {
  const newFake = {
      name: faker.commerce.productName(),
      price: "$" + faker.commerce.price(),
      department: faker.commerce.department()
  };
  return newFake;
};

module.exports = {
  createProduct : createProduct ,
};