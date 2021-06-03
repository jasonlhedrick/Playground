/*
With the use of both Array.push() and Array.pop() we can create
stack functionality with an array.
Stacks are a first in -> last out data structure.
This is also how recursion works:
The first function call is the last one returned.
*/

const stack = [];

function testStacking(stack, till = 10) {
    while (till != 0) {
        stack.push(till);
        console.log(`Stacking: ${stack}`);
        till--;
    }
}

function testUnstacking(stack) {
    while (stack.length != 0) {
        console.log(`Unstacking: ${stack} : Popped value : ${stack.pop()}`);
    }
}

testStacking(stack);
testUnstacking(stack);
