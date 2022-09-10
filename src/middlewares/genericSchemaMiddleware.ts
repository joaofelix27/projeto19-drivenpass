import { Request, Response, NextFunction } from "express";

export function validateSchema(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    let validate = req.body
    if(req.query) validate=req.query
    const { error } = schema.validate(validate, { abortEarly: false });
    if (error) return res.status(422).send(error);
    next();
  };
}
