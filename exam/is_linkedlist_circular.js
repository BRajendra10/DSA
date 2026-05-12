class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    push(value) {
        let node = new Node(value);

        if(!this.head) {
            this.head = node;
            node.next = this.head;
        }

        let curr = this.head;
        while(curr.next !== this.head) {
            curr = curr.next;
        }

        curr.next = node
        node.next = this.head
    }

    isCircular() {
        if(!this.head) return false;

        let curr = this.head.next;

        while (curr && curr !== this.head) {
            curr = curr.next;
        }

        return curr === this.head;
    }
}


const list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log(list.isCircular());
