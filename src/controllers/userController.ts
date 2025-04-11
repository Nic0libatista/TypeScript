/* O controlador de dados lida c as requisiçoes do usuario e, também faz as respostas ao usuario.
portanto, iremos importar as bibliotecas: request e response do framework express */

import { Request, Response } from "express";
/** importar a função q traz todos os usuarios */
import { getAllUsers } from "../models/userModel";

export async function getUsers(req:Request, res:Response):Promise<void> {
    try{
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch(error){
        res.status(500).json(`Erro ao listas os usuarios -> ${error}`)
    }
}