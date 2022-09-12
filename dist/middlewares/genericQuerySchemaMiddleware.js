"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuerySchema = void 0;
function validateQuerySchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.query, { abortEarly: false });
        if (error)
            return res.status(422).send(error);
        next();
    };
}
exports.validateQuerySchema = validateQuerySchema;
