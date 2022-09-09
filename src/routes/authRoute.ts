import { Router } from "express";
import { register } from "../controllers/authControllers";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import {registerSchema} from "../schemas/registerSchema";

const usersRouter= Router();

usersRouter.post("/register",validateSchema(registerSchema),register)

export default usersRouter;