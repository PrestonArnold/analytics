import express from "express";
import cors from "cors";
import requestIp from 'request-ip';

import trackRoutes from "./routes/track";

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestIp.mw());

app.use(trackRoutes);

export default app;