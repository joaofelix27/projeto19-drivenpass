import { Router } from "express";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import registerSchema from "../schemas/registerSchema";

const usersRouter= Router();

usersRouter.post("/register",validateSchema(registerSchema),)

export default usersRouter;