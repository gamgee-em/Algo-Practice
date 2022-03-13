// given a value - return true or false if the value exists within the linkedlist

class Node {

    constructor(val) {
        this.val = val;
        this.head = null;
    }

};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = null;

//* recursive solution
/* const linkedListFind = (head, target) => {
    
    if (head == null) {
        console.log(false);
        return false;
    }

    if (head.val == target) {
        console.log(true);
        return true;
    }

    return linkedListFind(head.next, target);

};
 */

//* iterative solution
const linkedListFind = (head, target) => {

    if (head == null) {
        
        console.log(false);
        return false;
    };

    while (head != null) {

        if (head.val == target) {
            console.log(true);
            return true;
        }

        head = head.next;
    };

    console.log(false);
    return false;
};

linkedListFind(a, 'v'); // false
linkedListFind(a, 'a'); // true