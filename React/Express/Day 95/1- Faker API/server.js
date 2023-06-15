const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const createUser = () => {
  const user = {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(),
    LastName:faker.person.lastName(), 
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number(),
  };
  return user;
}


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


// Company Object
// _id
// name
// address
// street
// city
// state
// zipCode
// country

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  const newFakeProduct = createProduct();
  console.table(newFakeProduct);
  res.json(newFakeProduct);
});


app.get("/api/user/new", (req, res) => {
  const newFakeUser = createUser();
  console.table(newFakeUser);
  res.json(newFakeUser);
});

app.get("/api/company/new", (req, res) => {
  const newFakeCompany = createCompany();
  console.table(newFakeCompany);
  res.json(newFakeCompany);
});

app.get("/api/user/company/new", (req, res) => {
  const newFakeCompany = createCompany();
  const newFakeUser = createUser();
  
  const twoVal = [newFakeCompany , newFakeUser]

  console.log(twoVal);
  res.json(twoVal);
});






const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
