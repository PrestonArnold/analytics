import { Router } from "express";
import { trackHandler } from "../controllers/track";

const router = Router();

router.post("/track", trackHandler)

export default router;