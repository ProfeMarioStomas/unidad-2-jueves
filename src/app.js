import express from 'express';
import userRouter from "../src/routers/users.route.js";

const app = express();

app.use(express.json());

app.use('/usuarios', userRouter);

app.get('/', (request, response) => {
    response.send("Servicio funcionando correctamente");
});

export default app;
