import { Router } from "express";
import usersRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import noteRouter from "./noteRouter";
import wifiRouter from "./wifiRouter";


const router=Router();

router.use(usersRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(wifiRouter)

export default router;
