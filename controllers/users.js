import { UserModel } from "../models/users.js";

export class UserController {
  static getUsersController = async (req, res) => {
    const { offset, limit, id, name, email, age, role } = req.query;
    const users = await UserModel.getUsers(id, name, email, age, role);
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }
    res.json(users);
  };

  static getUserByIdController = async (req, res) => {
    const user = await UserModel.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  };

  static createUserController = async (req, res) => {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
    const newUser = {
      id: crypto.randomUUID(),
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      role: req.body.role,
    };
    const user = await UserModel.createUser(newUser);
    res.status(201).json(user);
  };

  static updateUserController = async (req, res) => {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
    const user = await UserModel.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  };

  static deleteUserController = async (req, res) => {
    const user = await UserModel.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted" });
  };
}
