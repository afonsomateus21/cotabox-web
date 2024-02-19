import { number, object, string } from "yup";

export const userSchema = object({
  firstName: string().required().matches(/^[a-zA-Z\s]*$/, "First name must contain only text"),
  lastName: string().required().matches(/^[a-zA-Z\s]*$/, "Last name must contain only text"),
  participation: number().typeError("Participation must be a number").positive("Participation must me a positive number").required()
})