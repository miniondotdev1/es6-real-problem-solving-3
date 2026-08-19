// Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.

const createIdGenerator = () => {
    
    let count = 0;

    function inner(){
        count++
        return count
    }
    return inner;
}

const nextId = createIdGenerator();
nextId();
nextId();
nextId();


// Closer Real life Example

const createAnBackAccount = () => {
    let balance = 1000;
    const deposit = (amount) => {
        balance += amount
        return balance
    }
    const withdraw = (amount) => {
        if(amount <= balance){
            balance -= amount
            return balance
        }
        return "Insufficient Balance"
    }
    const getBalance = () => {
        return balance
    }
    return {deposit, withdraw, getBalance}
}

const account1 = createAnBackAccount();

console.log(account1.deposit(500));
console.log(account1.withdraw(300));
console.log(account1.getBalance());
