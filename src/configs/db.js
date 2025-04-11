import { Sequelize } from "sequelize";
import { envs } from './envs.js'

const sequelize = new Sequelize(envs.uri_db) // Enstancia global

export const databaseConnection = async () => {
    try{
        await sequelize.authenticate()
        console.log('Conexión a la base de datos exitosa');
    }catch(error){
        console.error('Error al conectar la base de datos:', error)
        process.exit(1); // Terminamos el proceso si la conexión falla
    }

}

