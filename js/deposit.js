// step-1 add the even listener button
document.getElementById('btn-deposit').addEventListener('click', function() {

    // step-2 get the deposit amount input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3 get thee current total
    // no input field(element other than input textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const prevoiusDepositTotalString = depositTotalElement.innerText;
    const prevoiusDepositTotal = parseFloat(prevoiusDepositTotalString);
    // set the add deposit ammount
    const currenDepositTotal = prevoiusDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currenDepositTotal;

    // step-5 set thee current balance value
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    // stp-7 clear the despoit field

    depositField.value = '';
})