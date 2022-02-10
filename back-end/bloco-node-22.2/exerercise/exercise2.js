const { numbers } = require('./exercise1')

function ramdomNumbers() {
  return Math.floor(Math.random() * 100 + 1);
}

const randomNumb = Array.from({ length: 3 }).map(ramdomNumbers)

numbers(...randomNumb)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error));

