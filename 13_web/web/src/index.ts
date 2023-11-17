import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps } from "./types/UserProps";
import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const users = new Collection('http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root')!;

  // new UserEdit(root, User.buildUser({ name: "Ross", age: 64 })).render();
  new UserList(root, users).render();
});

users.fetch();