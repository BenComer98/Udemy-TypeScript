import { Collection } from "../models/Collection";
import { Model } from "../models/Model";
import { Identifiable } from "../types/Identifiable";
import { View } from "./View";

export abstract class CollectionView<T extends Model<K>, K extends Identifiable> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: Model<K>, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}