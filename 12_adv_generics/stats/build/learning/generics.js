"use strict";
class ArrayOfNumbers {
    constructor(collection) {
        this.collection = collection;
    }
    ;
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfStrings {
    constructor(collection) {
        this.collection = collection;
    }
    ;
    get(index) {
        return this.collection[index];
    }
}
