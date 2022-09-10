import { Router } from "express";
import { createCredential } from "../controllers/credentialControllers";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";

const credentialRouter=Router();

credentialRouter.post("/credentials",validateSchema(credentialSchema),validateUser,createCredential);

export default credentialRouter;