import { Router } from "express";
import usersRouter from "./authRouter";
import credentialRouter from "./credentialRouter";


const router=Router();

router.use(usersRouter)
router.use(credentialRouter)

export default router;
