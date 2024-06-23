import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup
    .string()
    .min(2, "Message must be at least 2 characters")
    .required("Message is required"),
});

export interface FormValues {
  name: string;
  email: string;
  message: string;
}
