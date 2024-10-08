
const formElement = document.querySelector('form');
const validationParagraph = document.querySelector('#validation')
const storedPIN = '1234';

// Select and hold all buttons

const withdrawButton = document.querySelector('#withdraw');
const depositButton = document.querySelector('#deposit');
const balanceButton = document.querySelector('#balance');
const lastTransactionButton = document.querySelector('#lastTransaction');

const navElement = document.querySelector('nav');

const btnNodeList = navElement.querySelectorAll('button');

const divContainer = document.querySelector('.container');

const pinForm = document.querySelector('#PIN');

document.addEventListener('submit', (event) => {
    event.preventDefault();

})

let userBalance = 1000;
const userBalanceEl = document.querySelector('#userBalance');

const renderBalance = () => {
    userBalanceEl.textContent = `Your balance is: ${userBalance}$`;
}

const userTransactions = [];

navElement.classList.add(`hidden`);
let userInput;
formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        userInput = document.querySelector('input');
       

        // reset the validation text
        validationParagraph.textContent = '';
        validationParagraph.classList.remove('valid', 'invalid');

        if (userInput.value === storedPIN) {

            validationParagraph.textContent = 'PIN correct';
            
            // Add Class to the validation text
            validationParagraph.classList.add('valid');
            navElement.classList.remove(`hidden`);
            pinForm.classList.add(`hidden`);

        } else {

            validationParagraph.textContent = 'PIN incorrect';

            // Add Class to the validation text
            validationParagraph.classList.add('invalid');
            
        }
        userInput.value = ``
    }
);

const containers = divContainer.querySelectorAll('div');
// Add Event Listener to the btns
btnNodeList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        containers.forEach((container) => {
            container.classList.add('hidden');
        });

        const currenEl  = document.querySelector(`#${e.target.id}El`)

        currenEl.classList.toggle('hidden');
    });
});

const depositSub = document.querySelector(`#depositbtn`);
depositSub.addEventListener(`click` , function(){
    const depositInput = document.querySelector(`#depositInput`);
    deposit(depositInput.value);
    depositInput.value = "";
});

function deposit(input){
    userBalance += Number(input);
    transaction(`deposit` , input)
    renderBalance();

    
    alert(`The operation was performed successfully`)
}
const WithdrawSub = document.querySelector(`#WithdrawBtn`);
WithdrawSub.addEventListener(`click` , function(){
    const WithdrawInput = document.querySelector(`#WithdrawInput`);
    Withdraw(WithdrawInput.value);
    WithdrawInput.value = "";
});

function Withdraw(input){
    if(userBalance >= input){ 
    userBalance -= Number(input);
    alert(`The operation was performed successfully`)
    } else{
        alert(`There is not enough money in your account to perform this action`)
    }
    transaction(`Withdraw` , input)
    renderBalance();
}

const transactionBtn = document.querySelector(`#lastTransaction`)
transactionBtn.addEventListener(`click` , function(){
    const lastTransactionDisplay = document.querySelector(`#lastTransactionDisplay`);
    
    if (userTransactions.length === 0) {
        lastTransactionDisplay.textContent = "No transactions available.";
        return;
    }

    lastTransactionDisplay.innerHTML = "";

    userTransactions.forEach(transaction => {
        const transactionItem = document.createElement("p");
        transactionItem.textContent = `Type: ${transaction.type}, Amount: $${transaction.amount}`;
        lastTransactionDisplay.appendChild(transactionItem);
    });
   
})


function transaction(type , amount){
    userTransactions.push({type , amount})
    if (userTransactions.length > 5) {
        userTransactions.splice(0,1);
        
    }
}

const exitBtn = document.querySelector(`#exit`);
exitBtn.addEventListener(`click` , exit);

function exit(){
    navElement.classList.add(`hidden`);
    pinForm.classList.remove(`hidden`);
    validationParagraph.textContent = ``
}




renderBalance();