import { Router } from "express";
import * as credentialControllers from "../controllers/credentialControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { createCredentialSchema } from "../schemas/createSchemas/createCredentialSchema";
import { deleteSchema } from "../schemas/deleteSchemas/deleteSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";

const credentialRouter=Router();

credentialRouter.post("/credentials",validateSchema(createCredentialSchema),validateUser,credentialControllers.createCredential);
credentialRouter.get("/credentials",validateQuerySchema(getSchema),validateUser,credentialControllers.getCredential);
credentialRouter.delete("/credentials",validateQuerySchema(deleteSchema),validateUser,credentialControllers.deleteCredential);


export default credentialRouter;