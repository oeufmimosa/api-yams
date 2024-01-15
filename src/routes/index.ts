import express, { Router } from "express";

import pastrie from "./pastrie";
import user from "./user";
import auth from "./auth";
import game from "./game";

const router: Router = express.Router();

router.use("/api", pastrie )
router.use("/", user )
router.use("/", auth )
router.use("/game", game);

export default router;