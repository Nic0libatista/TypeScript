// importar a biblioteca do mysql/promisse para estabelecer a conexão c o banco de dados
import mysql from "mysql2/promise"
// a constante pool é uma conexão c o banco de dados. Com ela criaremos uma conexão c o mysql passando alguns parametros
// tais como: host (local do banco) || User (ususario do banco) || password (senha p acessar o banco) |
// database (nome do banco) || port (porta de comunicação do banco d dados)
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dbts",
    port:3306
})

export default pool;