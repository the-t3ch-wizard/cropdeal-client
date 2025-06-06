import { z } from "zod"

export const registerFormSchema = z.object({
  role: z.string().min(2, {
    message: "Role is required.",
  }),
  name: z.string().min(2, {
    message: "Name is required.",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

