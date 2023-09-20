import { Sortable } from "../hooks/Sortable";
import { sort } from "../hooks/sort";

export class MyString implements Sortable {
  private str: string;
  private n: number;
  constructor(str: string) {
    this.str = JSON.stringify(str);
    this.str = this.str.slice(1, this.str.length-1); // To cover JSON.stringify's first char being ""
    this.n = str.length;
  };

  public at: (i: number) => string = (i) => {
    return this.str[i];
  };

  public set: (i: number, val: number|string) => void = (i, val) => {
    if (typeof(val) == "number") {
      val = JSON.stringify(val);
    }
    this.str = this.str.substring(0, i) + val + this.str.substring(i+1);
  };

  public size: () => number = () => {
    return this.n;
  };

  public sort: () => void = () => {
    sort(this);
  }

  public log: () => void = () => {
    console.log(this.str);
  }
}