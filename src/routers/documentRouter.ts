import { Router } from "express";
import * as documentControllers from "../controllers/documentControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { createDocumentSchema } from "../schemas/createSchemas/createDocumentSchema";
import { deleteSchema } from "../schemas/deleteSchemas/deleteSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";

const documentRouter=Router();

documentRouter.post("/documents",validateSchema(createDocumentSchema),validateUser,documentControllers.createDocument);
documentRouter.get("/documents",validateQuerySchema(getSchema),validateUser,documentControllers.getDocument);
documentRouter.delete("/documents",validateQuerySchema(deleteSchema),validateUser,documentControllers.deleteDocument);


export default documentRouter;