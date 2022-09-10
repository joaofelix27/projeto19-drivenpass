
import joi from "joi";

export const querySchema =joi.object ({
   id:joi.number().integer().greater(0)
})
