// importa a biblioteca do row(linha) data (dados) packet (pacote)
//guarda todos os dados q retorna da consulta select
import { RowDataPacket } from "mysql2";
// importando a conexão c a database p fazer uma consulta nas tabelas do banco.
import pool from "../database";

// interface user faz uma descrição da estrutura de dados da tabela usuario
export interface User extends RowDataPacket{
    id: number;
    name: string;
    email:string;
}

/* Exporta a função getAllUsers (pegar todos os usuarios d banco de dados)
essa função é do tipo ascíncrona e, portanto, aguarda 1 processamento interno p realizar a exportação.
o exportação será feito pela linha do await(aguardar)
*/
export async function getAllUsers():Promise<User[]>{
    const [rows] = await pool.query<User[]>("select * from users", []);
        return rows;
}