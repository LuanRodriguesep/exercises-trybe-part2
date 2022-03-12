const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'trybe',
  password: 'trybe123',
  database: 'lectures_24_1',
  dialect: 'mysql'
});

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
},{ 
  tableName: 'products',
  timestamps: false,
 });

Product.create({ name: 'Violao', description: 'Instrumento de corda', price: 650.20 })
