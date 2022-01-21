// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

    constructor() {
        // create data array
        this.data = [];
    };

    // add entry to start of the array
    add(entry) {
        return this.data.unshift(entry);
    };

    // remove entry from end of the array
    remove(entry) {
        return this.data.pop(entry);
    }

};

module.exports = Queue;
