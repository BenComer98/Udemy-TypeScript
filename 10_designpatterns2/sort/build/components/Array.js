"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Array = void 0;
const sort_1 = require("../hooks/sort");
class Array {
    constructor(list) {
        this.at = (i) => {
            return this.arr[i];
        };
        this.set = (i, val) => {
            this.arr[i] = val;
        };
        this.size = () => {
            return this.n;
        };
        this.sort = () => {
            (0, sort_1.sort)(this);
        };
        this.log = () => {
            console.log(this.arr);
        };
        this.arr = [...list];
        this.n = list.length;
    }
    ;
}
exports.Array = Array;
