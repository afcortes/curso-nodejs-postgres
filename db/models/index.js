const { User, UserSchema } = require('./user.model');
const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./product.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models)
;}

module.exports = setupModels;
