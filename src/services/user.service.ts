import { CreateUserDTO } from "../types/user";
import { createUser } from "../repositories/users.repository";

export const createUserService = async (data: CreateUserDTO) => {
  if (!data.accepted_terms) {
    throw new Error("Termos de uso não aceitos.");
  }

  if (data.type === "INDIVIDUAL" && !data.cpf) {
    throw new Error("CPF é obrigatório para pessoa física.");
  }

  if (data.type === "COMPANY" && !data.cnpj) {
    throw new Error("CNPJ é obrigatório para pessoa jurídica.");
  }

  return createUser(data);
};
