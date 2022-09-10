import { Router } from "express";
import usersRouter from "./authRouter";
import credentialRouter from "./credentialRouter";
import noteRouter from "./noteRouter";


const router=Router();

router.use(usersRouter)
router.use(credentialRouter)
router.use(noteRouter)

export default router;
