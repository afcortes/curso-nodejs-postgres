const Joi = require('joi');
const { createUserSchema } = require('./user.schema');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();
const user = createUserSchema;

const getCustomerSchema = Joi.object({
    id: id.required(),
});

const createCustomerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: user.required(),
});

const updateCustomerSchema = Joi.object({
    name,
    lastName,
    phone,
    userId,
});

module.exports={ getCustomerSchema, createCustomerSchema, updateCustomerSchema };
