
// machine ID > input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id, value);
    return value;
}

// machine get balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const currentBalance = balanceElement.innerText;
    return Number(currentBalance);
}

// machine set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

//machine ID > hide all id > show One Id
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer-money');
    

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transferMoney.classList.add('hidden');

    const selectedID = document.getElementById(id);
    selectedID.classList.remove('hidden');
}