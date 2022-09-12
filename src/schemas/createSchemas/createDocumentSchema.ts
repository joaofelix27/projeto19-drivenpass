import joi from "joi"

export const createDocumentSchema =joi.object ({
    fullName:joi.string().required(),
    registerNumber:joi.string().required(),
    issueDate:joi.string().length(10).required(),
    expirationDate:joi.string().length(10).required(),
    issuingOrganization:joi.string().required(),
    type:joi.string().valid("RG","CNH").required()
})