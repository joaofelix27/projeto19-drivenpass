import { Router } from "express";
import * as wifiControllers from "../controllers/wifiControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { createWifiSchema } from "../schemas/createSchemas/createWifiSchema";
import { deleteSchema} from "../schemas/deleteSchemas/deleteSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";

const wifiRouter=Router();

wifiRouter.post("/wifis",validateSchema(createWifiSchema),validateUser,wifiControllers.createWifi);
wifiRouter.get("/wifis",validateQuerySchema(getSchema),validateUser,wifiControllers.getWifi);
wifiRouter.delete("/wifis",validateQuerySchema(deleteSchema),validateUser,wifiControllers.deleteWifi);


export default wifiRouter;