import Adapters from "next-auth/adapters";

export default class User extends Adapters.TypeORM.Models.User.model {
  constructor(nickname, email) {
    super(nickname, email);
  }
}

export const UserSchema = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
  },
};