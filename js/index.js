document.getElementById("input-btn").addEventListener("click", function () {
   const inputText = document.getElementById("input-text");
   const inputValueSting = inputText.value;
   const newInputValue = parseFloat(inputValueSting);

   inputText.value = "";

   const deposit = document.getElementById("deposit");
   const depositTotalSting = deposit.innerText;
   const newDepositTotal = parseFloat(depositTotalSting);

   const currentDepositTotal = newInputValue + newDepositTotal;

   deposit.innerText = currentDepositTotal;

   const balance = document.getElementById("balance");
   const balanceTotalString = balance.innerText;
   const balanceTotal = parseFloat(balanceTotalString);

   const currentBalanceTotal = balanceTotal + newInputValue;
   balance.innerText = currentBalanceTotal;
   
});
