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

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("Server on in http://localhost:" + PORT);
  });
}

export default app;
