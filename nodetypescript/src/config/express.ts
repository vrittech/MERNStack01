import express, { Request, Response } from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use('/api/v1',router)

export default app;