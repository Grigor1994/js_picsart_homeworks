/**
 *  Stack implementation
 * @returns {{pop: (function(): (* | undefined|undefined)), size: (function(): number), isEmpty: (function(): boolean), push: push, peek: (function(): *)}}
 */
function initStack() {
    let data = [];
    return {
        push: function (element) {
            data.push(element);
        },
        size: function () {
            return data.length;
        },
        peek: function () {
            return data[data.length - 1];
        },
        isEmpty: function () {
            return data.length === 0;
        },
        pop: function () {
            if (this.isEmpty() === false) {
                return data.pop();
            }
        }
    }
}

let stack1 = initStack();
stack1.push(1)
console.log(stack1.size())

let stack2 = initStack();
stack2.push(2)
stack2.push(3)
stack2.push(4)
console.log(stack2.size())
stack2.pop()
console.log(stack2.size())
console.log(stack2.peek())


/**
 * Queue implementation
 * @returns {{enqueue: enqueue, dequeue: (function(): (*|undefined))}}
 */
function initQueue() {
    let pushStack = initStack();
    let popStack = initStack();
    return {
        enqueue: function (value) {
            pushStack.push(value);
        },
        dequeue: function () {
            if (popStack.size() > 0) {
                return popStack.pop();
            }
            while (pushStack.size() > 0) {
                popStack.push(pushStack.pop());
            }
            return popStack.pop();
        }
    }
}

let queue = initQueue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());

queue.enqueue(3);
console.log(queue.dequeue());

