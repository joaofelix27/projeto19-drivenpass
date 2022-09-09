import { Router } from "express";
import { login, register } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import {authSchema} from "../schemas/authSchema";

const usersRouter= Router();

usersRouter.post("/register",validateSchema(authSchema),register)
usersRouter.post("/login",validateSchema(authSchema),login)

export default usersRouter;