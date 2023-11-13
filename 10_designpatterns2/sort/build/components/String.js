"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyString = void 0;
const sort_1 = require("../hooks/sort");
class MyString {
    constructor(str) {
        this.at = (i) => {
            return this.str[i];
        };
        this.set = (i, val) => {
            if (typeof (val) == "number") {
                val = JSON.stringify(val);
            }
            this.str = this.str.substring(0, i) + val + this.str.substring(i);
        };
        this.size = () => {
            return this.n;
        };
        this.sort = () => {
            (0, sort_1.sort)(this);
        };
        this.str = JSON.stringify(str);
        this.n = str.length;
    }
    ;
}
exports.MyString = MyString;
