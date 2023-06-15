const { faker } = require("@faker-js/faker");
const createCompany = () => {
  const company = {
    companyId: faker.string.uuid(),
    companyName: faker.company.name(),
    street: faker.location.street(),
    city:faker.location.city(), 
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  };
  return company;
}

module.exports = {
  createCompany : createCompany ,
};