import express from "express";
import cors from "cors";
import requestIp from 'request-ip';

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestIp.mw());

export default app;