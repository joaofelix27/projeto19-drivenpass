import { Router } from "express";
import { createNote, deleteNote, getNote } from "../controllers/noteControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { createNoteSchema } from "../schemas/createSchemas/createNoteSchema";
import { deleteSchema} from "../schemas/deleteSchemas/deleteSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";

const noteRouter=Router();

noteRouter.post("/notes",validateSchema(createNoteSchema),validateUser,createNote);
noteRouter.get("/notes",validateQuerySchema(getSchema),validateUser,getNote);
noteRouter.delete("/notes",validateQuerySchema(deleteSchema),validateUser,deleteNote);


export default noteRouter;