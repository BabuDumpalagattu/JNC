// Bank Account Example using Closures and Scope
function createBankAccount(initialBalance) {
    // Private variable (Local Scope)
    let balance = initialBalance;

    // Return an object with methods to interact with the account
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: $${amount}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log("Insufficient balance or invalid amount.");
            }
        },
        checkBalance() {
            console.log(`Your balance is: $${balance}`);
        }
    };
}

// Create a bank account with an initial balance of $1000
const myAccount = createBankAccount(1000);

// Interact with the account
myAccount.checkBalance(); // Output: Your balance is: $1000
myAccount.deposit(500);   // Output: Deposited: $500
myAccount.checkBalance(); // Output: Your balance is: $1500
myAccount.withdraw(300);  // Output: Withdrew: $300
myAccount.checkBalance(); // Output: Your balance is: $1200

// Attempt to directly access the balance variable
console.log(myAccount.balance); // Output: undefined (balance is private)
