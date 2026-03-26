import { Router } from "express";
import { UserController } from "../controllers/users.js";

export const usersRouter = Router();

usersRouter.get("/", UserController.getUsersController);
usersRouter.get("/:id", UserController.getUserByIdController);
usersRouter.post("/", UserController.createUserController);
usersRouter.put("/:id", UserController.updateUserController);
usersRouter.delete("/:id", UserController.deleteUserController);
