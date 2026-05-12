constructor(data) {
    this.data = data;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.last = null;
    }

    push(value) {
        let node = new Node(value);

        if(!this.head) {
            this.head = node;
        } else {
            this.last.next = node;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        // current head will become last after reverse
        this.last = this.head;

        while (current !== null) {
            next = current.next;   // store next node
            current.next = prev;   // reverse link
            prev = current;        // move prev forward
            current = next;        // move current forward
        }

        this.head = prev;
    }
    
}

const list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

