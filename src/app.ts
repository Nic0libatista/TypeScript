import express from "express"
import route from "./routers/userRouter"

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api",route);

app.listen(port,()=>{
    console.log(`Servidor online em http:127.0.0.1:${port}`)
})