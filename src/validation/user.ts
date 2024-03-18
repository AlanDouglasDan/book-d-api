import Joi from "joi";

const put = {
  body: Joi.object().keys({
    email: Joi.string().optional().email(),
    password: Joi.string().optional(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    phone: Joi.string().optional(),
    businessName: Joi.string().optional(),
    address: Joi.string().optional(),
  }),
};

export default { put };
