import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import requestIp from 'request-ip';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(requestIp.mw());

app.listen(port, () => {
    console.log(`Serving API on http://localhost:${port}`)
})