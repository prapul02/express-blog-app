require("../dbConfig/db");
const Author = require("../models/Author");
const faker = require("faker");

const AuthorData = [
  {
    name: faker.name.findName()
  },
  {
    name: faker.name.findName()
  },
  {
    name: faker.name.findName()
  },
  {
    name: faker.name.findName()
  },
  {
    name: faker.name.findName()
  }
];

const saveAuthor = async () => {
  AuthorData.forEach(async (element) => {
    try {
      const newAuthor = new Author(element);
      const result = await newAuthor.save();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  });
};

//console.log(AuthorData);
saveAuthor();
