import { View } from './View';
import { User } from '../models/User';
import { UserProps } from '../types/UserProps';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save': this.onSaveClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')!;
    this.model.set({name: input.value});
  }

  onSaveClick = (): void => {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <div>
          <input placeholder="${this.model.get('name')}"/>
          <button class='set-name'>Change Name</button>
          <button class='set-age'>Set Random Age</button>
        </div>
        <div>
          <button class='save'>Save</button>
        </div>
      </div>
    `;
  }

  
}