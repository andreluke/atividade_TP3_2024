import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

import { connect } from "./database/connection";
dotenv.config();

const PORT = process.env.PORT || 3010;
const app = express();
app.use(express.json());
app.use(cors());

connect();

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}...`);
});

app.use(routes);