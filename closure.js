function outerFunction() {
    let count = 0;
    return function innerFunction() {
        count++;
        console.log(count);
    };
}
const counter = outerFunction();
counter(); // Output: 1
counter(); 
counter();// Output: 2
counter();
counter();
counter();
