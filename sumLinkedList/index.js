// create a linked list & sum the total value

class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.next = b;
b.next = c;
c.next = null;

//* iterative solution 
const linkedListSum = head => {
    let sum = 0;
    while (head != null) {

        sum += head.val;
        head = head.next;
    };
    console.log(sum);
    return sum;
};

//let sum = 0;
/* 
//* recursive method
const linkedListSum = (head, sum = 0) => {

    if(head == null) {
        console.log(sum);
        return sum;
    };

    sum += head.val;
    //head = head.next;
    linkedListSum(head.next, sum);
};
 */
/* 
//* Seperated logic recursive method
const linkedListSum = head => {
    let sum = 0;

    sumAll(head, sum);
    return sum;
};

const sumAll = (head, sum) => {

    if(head == null) {
        console.log(sum);
        return sum;
    };

    sum += head.val;
    sumAll(head.next, sum);
}; */

linkedListSum(a);