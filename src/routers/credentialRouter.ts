import { Router } from "express";
import { createCredential, deleteCredential, getCredential } from "../controllers/credentialControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { createCredentialSchema } from "../schemas/createSchemas/createCredentialSchema";
import { deleteSchema } from "../schemas/deleteSchemas/deleteSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";

const credentialRouter=Router();

credentialRouter.post("/credentials",validateSchema(createCredentialSchema),validateUser,createCredential);
credentialRouter.get("/credentials",validateQuerySchema(getSchema),validateUser,getCredential);
credentialRouter.delete("/credentials",validateQuerySchema(deleteSchema),validateUser,deleteCredential);


export default credentialRouter;