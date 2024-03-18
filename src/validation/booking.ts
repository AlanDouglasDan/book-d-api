import Joi from "joi";

const add = {
  body: Joi.object().keys({
    date: Joi.string().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
  }),
};

const update = {
  body: Joi.object().keys({
    date: Joi.string().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    id: Joi.string().required(),
  }),
};

const remove = {
  body: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export default { add, update, remove };
