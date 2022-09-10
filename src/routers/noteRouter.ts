import { Router } from "express";
import { createCredential, deleteCredential, getCredential } from "../controllers/credentialControllers";
import { createNote, getNote } from "../controllers/noteControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { createNoteSchema } from "../schemas/createSchena/createNoteSchema";
import { deleteCredentialSchema } from "../schemas/deleteSchemas/deleteCredentialSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";

const noteRouter=Router();

noteRouter.post("/notes",validateSchema(createNoteSchema),validateUser,createNote);
noteRouter.get("/notes",validateQuerySchema(getSchema),validateUser,getNote);
noteRouter.delete("/notes",validateQuerySchema(deleteCredentialSchema),validateUser,deleteCredential);


export default noteRouter;