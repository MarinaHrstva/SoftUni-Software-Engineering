class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }

    add(value) {
        this.result.push(value);
        this.result.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error
        }
        this.result.splice(index, 1)
        this.result.sort((a, b) => a - b);
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.result.length) {
            throw new Error
        }
        return this.result[index];
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
