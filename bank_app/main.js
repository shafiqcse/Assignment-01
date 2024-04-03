class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = ownerName;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited into account ${this.accountNumber} Amount ${amount} Taka.`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn from account ${this.accountNumber} Amount ${amount} Taka.`);
      } else {
        console.log(`Insufficient balance in account ${this.accountNumber}.`);
      }
    }
  
    getBalance() {
        console.log (`Balance: ${this.balance} Taka`);;
    }

    displayAccountInfo(){
        console.log (`Account Number: ${this.accountNumber}`);
        console.log (`Owner Name: ${this.accountHolderName}`);
        this.getBalance();
    }
  }
  
  // Create multiple instances of the BankAccount class
    const account1 = new BankAccount('BBL-012', 'John Doe', 500);
    const account2 = new BankAccount('BBL-013', 'James Charlie', 400);

// Transactions on the bank accounts1
    account1.deposit(400);
    account1.withdraw(200);
    account1.displayAccountInfo();

    // Transactions on the bank accounts2
    account2.deposit(500);
    account2.withdraw(1000);
    account2.displayAccountInfo();
  