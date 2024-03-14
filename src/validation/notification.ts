import Joi from "joi";

const add = {
  body: Joi.object().keys({
    body: Joi.string().required(),
    userId: Joi.string().required(),
  }),
};

export default { add };
