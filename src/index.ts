import env from "dotenv"
import app from "./server";

env.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serving API on http://localhost:${port}`)
})
