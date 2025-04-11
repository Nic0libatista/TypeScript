// importa a biblioteca do row(linha) data (dados) packet (pacote)
//guarda todos os dados q retorna da consulta 
// o result é utilizado para executar as consultas de modificação das tabelas
// insert | update | delete
import { RowDataPacket , ResultSetHeader } from "mysql2";
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

// Função para criar um novo usuário
// aguarda o usuario ser cadastrado portanto estamos usando a função como async.. await
// para cadastra um usuario será necessario passar o usuario por parametro e,ele será gerenciado pelo seu id

export async function createUser(user: Omit<User, 'id'>): Promise<ResultSetHeader> {
        try {
// usar comando insert p cadastrar o usuario na database. comando await  irá esperar pelo cadastro completo do usuario
// na consulta do insert está sendo passada 2 parametros c simbolo de "?". consultas parametrizadas evitam a injeção d sql
          const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [user.name, user.email]
          );
          return result;
        } catch (error) {
          console.error('Erro ao criar usuário:', error);
          throw error;
        }
      }


    // Função para atualizar um usuário existente
export async function updateUser(id: number, user: Omit<User, 'id'>): Promise<ResultSetHeader> {
        try {
          const [result] = await pool.execute<ResultSetHeader>(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [user.name, user.email, id]
          );
          return result;
        } catch (error) {
          console.error('Erro ao atualizar usuário:', error);
          throw error;
        }
      }
    
 // Função para deletar um usuário
  export async function deleteUser(id: number): Promise<ResultSetHeader> {
    try {
      const [result] = await pool.execute<ResultSetHeader>('DELETE FROM users WHERE id = ?', [id]);
      return result;
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      throw error;
    }
  }

