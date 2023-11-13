export class ListNode {
  val: number|string;
  next: ListNode|null;
  constructor(list: (number|string)[]) {
    const [ head, ...rest ] = list;
    this.val = head;
    if (rest.length > 0)
      this.next = new ListNode(rest);
    else
      this.next = null;
  }
}