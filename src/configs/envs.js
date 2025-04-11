import Joi from "joi"

const envSchema = Joi.object({
    PORT: Joi.number().required().port(),
    URI_DB: Joi.string().required()
}).unknown(true)

const { value, error } = envSchema.validate(process.env) 

if (error) {
    throw new Error(`Environment validation error: ${error.message}`)
}

export const envs = {
    port: value.PORT,
    uri_db: value.URI_DB
}