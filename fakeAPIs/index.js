const healthProblems = require('./healthProblems.json');
const users = require('./userData.json');
const coffee = require('./coffee.json');
const book = require('./book.json');
// Something more

module.exports = () => ({
    healthProblems: healthProblems,
    userData: users,
    coffee: coffee,
    book: book
  // Something more
});