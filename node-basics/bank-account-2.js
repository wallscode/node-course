var accounts = [];

// Account object
	//balance
	//username

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;
	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	})
	return matchedAccount;
}


function deposit (account, amount) {
	account.balance += amount;
}

function withdraw (account, amount) {
	account.balance -= amount;
}

function getBalance (account) {
	return account.balance;
}

var andrewsAccount = createAccount({
	username: 'Andrew',
	balance: 0
});

deposit(andrewsAccount, 100);
console.log(getBalance(andrewsAccount));

withdraw(andrewsAccount, 11);
console.log(getBalance(andrewsAccount));

var existingAccount = getAccount('Andrew');
console.log(getBalance(andrewsAccount));

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

console.log(accounts);

var existingJensAccount = getAccount('jen001');

console.log(existingJensAccount);

