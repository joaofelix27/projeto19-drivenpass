import { Router } from "express";
import { createCredential, deleteCredential, getCredential } from "../controllers/credentialControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";
import { deleteCredentialSchema } from "../schemas/deleteCredentialSchema";
import { getCredentialSchema} from "../schemas/getCredentialSchema";

const credentialRouter=Router();

credentialRouter.post("/credentials",validateSchema(credentialSchema),validateUser,createCredential);
credentialRouter.get("/credentials",validateQuerySchema(getCredentialSchema),validateUser,getCredential);
credentialRouter.delete("/credentials",validateQuerySchema(deleteCredentialSchema),validateUser,deleteCredential);


export default credentialRouter;