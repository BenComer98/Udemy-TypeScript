"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const sort_1 = require("../hooks/sort");
const ListNode_1 = require("./ListNode");
class LinkedList {
    constructor(list) {
        this.at = (i) => {
            if (i >= this.n)
                return this.at(this.n - 1);
            else if (i < 0)
                return this.at(0);
            let ptr = this.head;
            for (let j = 0; j < i; ++j) {
                if (ptr == null) {
                    console.log("Indexing failed on LinkedList!");
                    return 0;
                }
                else {
                    ptr = ptr === null || ptr === void 0 ? void 0 : ptr.next;
                }
            }
            if (ptr == null)
                return 0;
            else
                return ptr.val;
        };
        this.set = (i, val) => {
            if (i >= this.n)
                return this.at(this.n - 1);
            else if (i < 0)
                return this.at(0);
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
        this.size = () => {
            return this.n;
        };
        this.sort = () => {
            (0, sort_1.sort)(this);
        };
        this.log = () => {
            let str = "";
            let ptr = this.head;
            while (ptr != null) {
                str += ptr.val + ' ';
                ptr = ptr.next;
            }
            console.log(str);
        };
        if (list.length == 0) {
            this.head = null;
            this.n = 0;
        }
        else {
            this.head = new ListNode_1.ListNode(list);
            this.n = list.length;
        }
    }
    ;
}
exports.LinkedList = LinkedList;
