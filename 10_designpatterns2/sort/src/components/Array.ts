import { Sortable } from "../hooks/Sortable";
import { sort } from "../hooks/sort";

export class Array implements Sortable {
  private arr: (number|string)[];
  private n: number;
  constructor(list: (number|string)[]) {
    this.arr = [...list];
    this.n = list.length;
  };

  public at: (i: number) => number|string = (i) => {
    return this.arr[i];
  };

  public set: (i: number, val: number|string) => void = (i, val) => {
    this.arr[i] = val;
  };

  public size: () => number = () => {
    return this.n;
  };

  public sort: () => void = () => {
    sort(this);
  }

  public log: () => void = () => {
    console.log(this.arr);
  }
}