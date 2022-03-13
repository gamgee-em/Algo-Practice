// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    };

    add(entry) {
        this.first.push(entry);
    };

    remove() {

        //* remove all items from first stack into second stack
       while(this.first.peek()) {
           this.second.push(this.first.pop());
       };

       //* remove the record we're looking for
       const record = this.second.pop();

       //* return the remaining items back to first stack
       while(this.second.peek()) {
           this.first.push(this.second.pop());
       };
       return record;
    };

    peek() {

        //* remove all items from first stack into second stack
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        };

        //* view the record we're looking for
        const record = this.second.peek();

        //* return/restore all items back into second stack
        while(this.second.peek()) {
            this.first.push(this.second.pop());
        };
        return record;
    };
};

module.exports = Queue;
