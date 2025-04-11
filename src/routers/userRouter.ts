
import { Router } from "express";
import { getUsers, create, update,deleta } from "../controllers/userController";
const route = Router();
route.get("/users",getUsers);
route.post("/create", create);
route.put("/update/:id",update)
route.delete("/delete/:id",deleta)
export default route;