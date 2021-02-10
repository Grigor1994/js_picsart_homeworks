function Node(value) {
    return {
        value: value,
        next: null
    }
}

function hasCycle(head) {
    if (head == null) return false;

    let fast = head.next;
    let slow = head;
    while (fast != null && fast.next != null && slow != null) {
        if (fast === slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
}

let linkedList = Node(1);
linkedList.next = Node(2);
linkedList.next.next = Node(3);
linkedList.next.next.next = linkedList.next;
console.log(hasCycle(linkedList));