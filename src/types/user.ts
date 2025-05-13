interface Address {
  cep?: string;
  street?: string;
  number?: string;
  complement?: string;
  city?: string;
  neighborhood?: string;
  state?: string;
}

type UserType = "INDIVIDUAL" | "COMPANY";

export type CreateUserDTO = {
  type: UserType;
  name: string;
  cpf?: string;
  cnpj?: string;
  email: string;
  phone?: string;
  cell?: string;
  accepted_terms: boolean;
  address: Address;
};
