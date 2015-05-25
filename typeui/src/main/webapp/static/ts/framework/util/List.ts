
class List<T> {

    private array: Array<T>;

    constructor() {
        this.array = new Array<T>();
    }

    contains(t: T): boolean {
        return this.array.indexOf(t) > -1;
    }

    size(): number {
        return this.array.length;
    }

    add(t: T) {
        this.array.push(t);
    }

    indexOf(t: T): number {
        return this.array.indexOf(t);
    }

    get(index: number) {
        return this.array[index];
    }


    remove(t: T) {
        var index = this.array.indexOf(t);

        if (index > -1) {
            this.removeAt(index);
        }
    }

    removeAt(index: number) {
        this.array.splice(index, 1);
    }

    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any) {
        this.array.forEach(callbackfn);
    }

    /**
     * Remove all elements from the list
     * 
     */
    clear() {
        this.array = new Array<T>();
    }

    /**
     * Reverse elements
     * 
     */
    reverse() {
        this.array.reverse();
    }
}