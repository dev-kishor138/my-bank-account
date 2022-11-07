function getInput(id){
    const inputField = document.getElementById(id);
    const input = parseFloat(inputField.value);
    inputField.value = '';
    return input;
}
function getInnerText(id){
    const callId = document.getElementById(id);
    const value = parseFloat(callId.innerText);
    return value;
}
function getUpdate(id, amount){
    const getTextId = getInnerText(id);
    const total = getTextId + amount;
    document.getElementById(id).innerText = total;
    return total;
}
function addOrSub(amount, add){
    const balance = getInnerText('balance');
    let totalBalance;
    if(add == true){
        totalBalance = balance + amount;
    }
    else{
        totalBalance = balance - amount;
    }
    document.getElementById('balance').innerText = totalBalance;
}



document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = getInput('deposit-input');
    if(depositInput > 0){
        getUpdate('deposit-amount', depositInput);
        addOrSub(depositInput, true)
    }
    else{
        alert('Please type valid number');
    }
})


document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = getInput('withdraw-input');
    const balance = getInnerText('balance');
    if(withdrawInput > 0 && withdrawInput <= balance){
        getUpdate('withdraw-amount', withdrawInput);
        addOrSub(withdrawInput, false)
    }
    else{
        alert('Your Account not Afford That Money');
    }
})