import { z } from "zod";

// Schemas
const userSchema = z.object({
  email: z.string().email({ message: "Ingrese un correo válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  fullName: z
    .string()
    .min(2, { message: "El nombre completo debe tener al menos 2 caracteres" })
    .max(50, {
      message: "El nombre completo no debe exceder los 50 caracteres",
    }),
  phone: z
    .number()
    .gte(3000000000, {
      message: "Teléfono inválido",
    })
    .lte(3999999999, {
      message: "Teléfono inválido",
    }),
  address: z
    .string()
    .max(50, { message: "La dirección no debe exceder los 50 caracteres" }),
  birthday: z.date({ message: "Ingrese una fecha válida" }),
  city: z.string().length(24, { message: "ID de ciudad inválido" }),
  department: z.string().length(24, { message: "ID de departamento inválido" }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Credenciales inválidas" }),
  password: z.string({ message: "Credenciales inválidas" }),
});

// Types
type TUserSchema = z.infer<typeof userSchema>;
type TLoginSchema = z.infer<typeof loginSchema>;

export { userSchema, TUserSchema, loginSchema, TLoginSchema };
