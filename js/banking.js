//handle deposite button :
document.getElementById('deposite-btn').addEventListener('click', function () {

    // get the deposited amount
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmount = depositeInput.value;
    const depositeTotal = document.getElementById('deposite-total');

    // update deposite total
    const previousDepositeAmount = depositeTotal.innerText;

    const newDepositeTotal = parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount);

    depositeTotal.innerText = newDepositeTotal;

    // update total balance

    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newDepositeTotal;
    balanceTotal.innerText = newBalanceTotal;

    //clear input
    depositeInput.value = '';
});


//handle Withdraw  button :
document.getElementById('withdraw-btn').addEventListener('click', function () {

    // get the deposite amount
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // Set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update total balance

    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw : 
    withdrawInput.value = '';
});