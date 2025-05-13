import { z } from "zod";

export const createUserSchema = z.object({
  type: z.enum(["INDIVIDUAL", "COMPANY"], {
    errorMap: () => ({ message: "Tipo de pessoa é obrigatório." }),
  }),
  name: z
    .string({
      required_error: "Nome é obrigatório.",
    })
    .min(1, { message: "Nome não pode ser vazio." }),
  cpf: z
    .string()
    .min(11, { message: "CPF deve ter no mínimo 11 caracteres." })
    .max(14, { message: "CPF inválido." })
    .optional(),
  cnpj: z
    .string()
    .min(14, { message: "CNPJ deve ter no mínimo 14 caracteres." })
    .max(18, { message: "CNPJ inválido." })
    .optional(),
  email: z
    .string({
      required_error: "E-mail é obrigatório.",
    })
    .email({ message: "E-mail inválido." }),
  phone: z.string().optional(),
  cell: z.string().optional(),
  accepted_terms: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos de uso." }),
  }),
  address: z.object({
    cep: z.string().optional(),
    street: z.string().optional(),
    number: z.string().optional(),
    complement: z.string().optional(),
    city: z.string().optional(),
    neighborhood: z.string().optional(),
    state: z.string().optional(),
  }),
});
