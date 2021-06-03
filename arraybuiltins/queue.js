/*
Building a JS queue with array builtins of push() and shift().
Queues are a first in -> first out data structure.
So you push new elements onto the end of the queue.
And shift elements off the front of the queue.
*/

const queue = [];

function enqueue(val) {
    // Very basic and no error handling of values.
    queue.push(val);
}

function dequeue() {
    return queue.shift();
}

enqueue(10);
enqueue(11);
enqueue(5);
enqueue(1);

console.log(queue);
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());