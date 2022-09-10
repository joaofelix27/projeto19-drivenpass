import { Router } from "express";
import { createCredential, getCredential } from "../controllers/credentialControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";
import { querySchema } from "../schemas/querySchema";

const credentialRouter=Router();

credentialRouter.post("/credentials",validateSchema(credentialSchema),validateUser,createCredential);
credentialRouter.get("/credentials",validateQuerySchema(querySchema),validateUser,getCredential);
credentialRouter.delete("/credentials",validateQuerySchema(querySchema),validateUser);


export default credentialRouter;