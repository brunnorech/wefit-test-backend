import { prisma } from "../lib/prisma";
import { CreateUserDTO } from "../types/user";

export const createUser = async (data: CreateUserDTO) => {
  const { address, ...userData } = data;

  return prisma.user.create({
    data: {
      ...userData,
      addresses: {
        create: address,
      },
    },
    include: {
      addresses: true,
    },
  });
};
