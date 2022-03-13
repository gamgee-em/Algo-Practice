// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    // set default value of next to null
    constructor(data, next = null) {
        // initialize properties data & next
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        // initialize a head property set to null
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {

        return this.head;

    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        
        while (node) {
            // if the node 'next' value is 'null' this indicates the current node is the last node in the linkedlist
            if (node.next == null) {
                return node;
            }
            // reassign node to the next node in the linkedList to check if it exists
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

}

const nodeOne = new Node(5);
const list = new LinkedList();

list.head = nodeOne;
list.insertFirst(66);
list.insertFirst(42);
console.log(list);
console.log(list.clear());
console.log(list.size());


module.exports = { Node/* , LinkedList */ };
