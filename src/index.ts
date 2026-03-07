import env from "dotenv"
import app from "./server";
import { ensureDefaultSite } from "./services/site";

env.config();

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    await ensureDefaultSite();
    console.log(`Serving API on http://localhost:${port}`)
})
