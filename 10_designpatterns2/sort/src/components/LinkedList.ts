import { Sortable } from "../hooks/Sortable";
import { sort } from "../hooks/sort";
import { ListNode } from "./ListNode";

export class LinkedList implements Sortable {
  private head: ListNode|null;
  private n: number;
  constructor(list: (number|string)[]) {
    if (list.length == 0) {
      this.head = null;
      this.n = 0;
    }
    else {
      this.head = new ListNode(list);
      this.n = list.length;
    }
  };

  public at: (i: number) => number|string = (i) => {
    if (i >= this.n) return this.at(this.n-1);
    else if (i < 0) return this.at(0);

    let ptr = this.head;
    for (let j = 0; j < i; ++j) {
      if (ptr == null) {
        console.log("Indexing failed on LinkedList!");
        return 0;
      }
      else {
        ptr = ptr?.next;
      }
    }

    if (ptr == null)
      return 0;
    else
      return ptr.val;
  };

  public set: (i: number, val: number|string) => void = (i, val) => {
    if (i >= this.n) return this.at(this.n-1);
    else if (i < 0) return this.at(0);

    let ptr = this.head;
    for (let j = 0; j < i; ++j) {
      if (ptr == null) {
        console.log("Indexing failed on LinkedList!");
        return 0;
      }
      else {
        ptr = ptr.next;
      }
    }

    if (ptr != null) {
      ptr.val = val;
    }
  };

  public size: () => number = () => {
    return this.n;
  };

  public sort: () => void = () => {
    sort(this);
  }

  public log: () => void = () => {
    let str = "";
    let ptr = this.head;
    while (ptr != null) {
      str += ptr.val + ' ';
      ptr = ptr.next;
    }

    console.log(str);
  }
}