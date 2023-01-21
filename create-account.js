// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:

function createAccount(pin, amount = 0) {
	let setPin = pin;
	let totalBalance = amount;
	let account = {
		// checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
		// account.checkBalance("oops");
		// // "Invalid PIN."
		checkBalance(enteredPin) {
			if (!validPin(enteredPin)) return 'Invalid PIN.';
			return `$${totalBalance}`;
		},
		deposit(enteredPin, amount) {
			// deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
			// account.deposit("1234", 250);
			// // "Succesfully deposited $250. Current balance: $350."
			if (!validPin(enteredPin)) return 'Invalid PIN.';
			totalBalance += amount;
			return `Succesfully deposited $${amount}. Current balance: $${totalBalance}.`;
		},
		withdraw(enteredPin, amount) {
			// withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
			// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)
			// let account = createAccount("1234", 100);
			// account.withdraw("1234" 300);
			// // "Succesfully withdrew $300. Current balance: $50."
			// account.withdraw("1234" 10);
			// // "Withdrawal amount exceeds account balance. Transaction cancelled."
			if (!validPin(enteredPin)) return 'Invalid PIN.';
			if (amount > totalBalance) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
			totalBalance -= amount;
			return `Succesfully withdrew $${amount}. Current balance: $${totalBalance}.`;
		},

		changePin(enteredPin, newPin) {
			// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)
			if (!validPin(enteredPin)) return 'Invalid PIN.';
			setPin = newPin;
			console.log(setPin);
			return 'PIN successfully changed!';
		}
	};

	function validPin(enteredPin) {
		return setPin !== enteredPin ? false : true;
	}
	return account;
}

module.exports = { createAccount };
