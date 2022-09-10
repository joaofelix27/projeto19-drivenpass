import { Request, Response, NextFunction } from "express";

export function validateQuerySchema(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query, { abortEarly: false });
    if (error) return res.status(422).send(error);
    next();
  };
}
