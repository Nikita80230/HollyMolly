import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be at most 25 characters")
    .matches(
     /^[A-Za-z0-9~`!@#$%^&*()_\-+={[}\]|:;'<,>.?/ ]*$/,
      "Password must contain only letters, numbers, or optional special characters"
    )
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
