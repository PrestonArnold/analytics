import express from "express";
import { PrismaClient } from "./generated/prisma/client";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serving API on http://localhost:${port}`)
})