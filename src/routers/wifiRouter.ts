import { Router } from "express";
import { createWifi, deleteWifi, getWifi } from "../controllers/wifiControllers";
import { validateQuerySchema } from "../middlewares/genericQuerySchemaMiddleware";
import { validateSchema } from "../middlewares/genericSchemaMiddleware";
import validateUser from "../middlewares/validateUserMiddleware";
import { createWifiSchema } from "../schemas/createSchemas/createWifiSchema";
import { deleteSchema} from "../schemas/deleteSchemas/deleteSchema";
import { getSchema} from "../schemas/getSchemas/getSchema";

const wifiRouter=Router();

wifiRouter.post("/wifis",validateSchema(createWifiSchema),validateUser,createWifi);
wifiRouter.get("/wifis",validateQuerySchema(getSchema),validateUser,getWifi);
wifiRouter.delete("/wifis",validateQuerySchema(deleteSchema),validateUser,deleteWifi);


export default wifiRouter;