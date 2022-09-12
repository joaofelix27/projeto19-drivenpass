import { Router } from "express";
import usersRouter from "./authRouter";
import cardRouter from "./cardRouter";
import credentialRouter from "./credentialRouter";
import documentRouter from "./documentRouter";
import noteRouter from "./noteRouter";
import wifiRouter from "./wifiRouter";


const router=Router();

router.use(usersRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(wifiRouter)
router.use(cardRouter)
router.use(documentRouter)

export default router;
