import { z } from "zod";

export const createUserSchema = z.object({
  type: z.enum(["INDIVIDUAL", "COMPANY"]),
  name: z.string().min(1),
  cpf: z.string().min(11).max(14).optional(),
  cnpj: z.string().min(14).max(18).optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  cell: z.string().optional(),
  accepted_terms: z.literal(true),
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
