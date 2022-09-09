import joi from "joi";
import { IUsersData } from "../generics/types/types";

export  const authSchema = joi.object<IUsersData>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});

