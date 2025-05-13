import { z } from "zod";
import { createUserSchema } from "../validators/user.schema";

export type CreateUserDTO = z.infer<typeof createUserSchema>;
