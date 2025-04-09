import Joi from "joi"

const envSchema = Joi.object({
    PORT: Joi.number().required().port(),
}).unknown(true)

const { value, error } = envSchema.validate(process.env) 

if (error) {
    throw new Error(`Environment validation error: ${error.message}`)
}

export const envs = {
    port: value.PORT
}