import { ModelAttributes } from "../types/ModelAttributes";
import { Sync } from "../types/Sync";
import { Events } from "../types/Events";
import { Identifiable } from "../types/Identifiable";
import { AxiosResponse } from 'axios';

export class Model<T extends Identifiable> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>,
    private propType: KeyType
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  get getAll() {
    return this.attributes.getAll;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    
    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.attributes.set(response.data);
      this.events.trigger('change');
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.events.trigger('save');
      })
      .catch(() => {
        this.events.trigger('error');
      });
  }
}