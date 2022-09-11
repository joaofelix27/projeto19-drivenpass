import { Router } from "express";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import * as cardControllers from '../controllers/cardControllers'
import { deleteSchema } from "../schemas/deleteSchemas/deleteSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";
import { createCardSchema } from "../schemas/createSchemas/createCardSchema";

const cardRouter=Router();

cardRouter.post("/cards",validateSchema(createCardSchema),validateUser,cardControllers.createCard);
cardRouter.get("/cards",validateQuerySchema(getSchema),validateUser,cardControllers.getCard);
cardRouter.delete("/cards",validateQuerySchema(deleteSchema),validateUser,cardControllers.deleteCard);


export default cardRouter;