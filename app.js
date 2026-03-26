import express from "express";
import { DEFAULTS } from "./config.js";
import { usersRouter } from "./routes/users.js";
import { productsRouter } from "./routes/products.js";
import { corsMiddleware } from "./middlewares/cors.js";

const PORT = process.env.PORT ?? DEFAULTS.PORT;

const app = express();
app.use(express.json());
app.use(corsMiddleware());
app.use("/users", usersRouter);
app.use("/products", productsRouter);

export default app;
