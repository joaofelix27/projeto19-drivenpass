import { Router } from "express";
import * as authControllers from "../controllers/authControllers";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import {authSchema} from "../schemas/authSchema";

const usersRouter= Router();

usersRouter.post("/register",validateSchema(authSchema),authControllers.register)
usersRouter.post("/login",validateSchema(authSchema),authControllers.login)

export default usersRouter;