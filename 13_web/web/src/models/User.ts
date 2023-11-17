import { Model } from "./Model";
import { UserProps } from "../types/UserProps";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attributes: UserProps): User {
    return new User(
      new Attributes<UserProps>(attributes),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      'http://localhost:3000/users',
      (json: UserProps) => User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set( { age } );
    this.trigger('change');
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }
}