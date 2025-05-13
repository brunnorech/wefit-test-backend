import { CreateUserDTO } from "../types/user";
import { createUser } from "../repositories/users.repository";
import { HttpError } from "../utils/httpError";

export const createUserService = async (data: CreateUserDTO) => {
  if (!data.accepted_terms) {
    throw new HttpError("Termos de uso não aceitos.", 400);
  }

  if (data.type === "INDIVIDUAL" && !data.cpf) {
    throw new HttpError("CPF é obrigatório para pessoa física.", 400);
  }

  if (data.type === "COMPANY" && !data.cnpj) {
    throw new HttpError("CNPJ é obrigatório para pessoa jurídica.", 400);
  }

  return createUser(data);
};
