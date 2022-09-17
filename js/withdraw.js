document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a number');
        return;
    }


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevoiusWithdrawString = withdrawTotalElement.innerText;
    const previousNewWithdrawAmount = parseFloat(prevoiusWithdrawString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);




    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baap er bank ato tk nai');
        return;
    }

    const currentWithdrawTotal = previousNewWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;






})