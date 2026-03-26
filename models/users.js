import data from "../data/data.json" with { type: "json" };

let usersArray = data.users;
export class UserModel {
  static getUsers = async (id, name, email, age, role) => {
    if (id) {
      return usersArray.find((user) => user.id === id);
    }
    if (name) {
      return usersArray.find((user) => user.name === name);
    }
    if (email) {
      return usersArray.find((user) => user.email === email);
    }
    if (age) {
      return usersArray.find((user) => user.age === age);
    }
    if (role) {
      return usersArray.find((user) => user.role === role);
    }

    return usersArray;
  };

  static getUserById = async (id) =>
    usersArray.find((user) => user.id === Number(id));

  static createUser = async (user) => {
    usersArray.push(user);
    return user;
  };

  static updateUser = async (id, user) => {
    const index = usersArray.findIndex((u) => u.id === id);
    if (index !== -1) {
      usersArray[index] = user;
      return user;
    }
    return null;
  };

  static deleteUser = async (id) => {
    const index = usersArray.findIndex((u) => u.id === id);
    if (index !== -1) {
      usersArray.splice(index, 1);
      return true;
    }
    return false;
  };
}
