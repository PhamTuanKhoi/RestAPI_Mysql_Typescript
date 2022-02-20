import mysql from 'mysql';
import config from './config';


const Connect = async (query: string) => new Promise<mysql.Connection>((resolve, reject) => {
    var connection = mysql.createConnection({
        host: config.mysql.hostname,
        user: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.database
    });
    
    connection.connect((error) =>{
        if (error) {
            reject(error);
            return;
        }

        // resolve(connection);

        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }
    
            resolve(result);
        })
    });
});


export {Connect}