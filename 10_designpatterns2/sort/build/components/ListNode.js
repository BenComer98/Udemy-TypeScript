"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
class ListNode {
    constructor(list) {
        const [head, ...rest] = list;
        this.val = head;
        if (rest.length > 0)
            this.next = new ListNode(rest);
        else
            this.next = null;
    }
}
exports.ListNode = ListNode;
