import express from "express";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
const port = process.env.PORT || 4568;

app.use(express.json());

app.use(userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
