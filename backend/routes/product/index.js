import { Router } from "express";
import motor from "./motor.js";
import accessories from "./accessories.js";

const router = Router();

router.get('/motors', motor);
router.get('/accessories', accessories);

export default router;