import { Router } from "express";
import usersRouter from "./authRoute";


const router=Router();

router.use(usersRouter)

export default router;
