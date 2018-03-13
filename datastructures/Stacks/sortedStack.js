let Stack = require("./stack");

let sortStack = function (originalStack) {
    if (originalStack.size() > 0) {
        let temp = originalStack.pop();
        sortStack(originalStack);
        insertSorted(temp, originalStack)
        //console.log(originalStack.toString());
    }
}

let insertSorted = function (value, stack) {
    let currentValue = stack.peek();
    if (currentValue > value) {
        let temp = stack.pop();
        insertSorted(value, stack);
        stack.push(temp);
        return;
    }
    stack.push(value);
}

let st = new Stack()
st.push(3);
st.push(2);
st.push(1);
st.push(5);
st.push(6);
st.push(7);
st.push(0);
st.push(-1);
console.log(st.toString());
sortStack(st);
console.log(st.toString());