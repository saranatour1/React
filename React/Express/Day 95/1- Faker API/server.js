const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const newObjectUser  =require('./controllers/newObjectUser.js');
const newCompanyObject  =require('./controllers/newCompanyObject.js');
const newProductObject = require('./controllers/newProductObject.js');

// we can create a function to return a random / fake "Product"

// res is short for response
app.get("/api", (req, res) => {
  const newFakeProduct = newProductObject.createProduct();
  console.table(newFakeProduct);
  res.json(newFakeProduct);
});

app.get("/api/user/new", (req, res) => {
  const newFakeUser = newObjectUser.createUser();
  console.table(newFakeUser);
  res.json(newFakeUser);
});

app.get("/api/test" , (req , res) => {

  console.log(user);

})


app.get("/api/company/new", (req, res) => {
  const newFakeCompany = newCompanyObject.createCompany();
  console.table(newFakeCompany);
  res.json(newFakeCompany);
});

app.get("/api/user/company/new", (req, res) => {
  const twoVal = [newCompanyObject.createCompany(), newObjectUser.createUser()];
  console.log(twoVal);
  res.json(twoVal);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
