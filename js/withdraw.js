document.getElementById("withdraw-btn").addEventListener("click", function () {
   const withdraw = document.getElementById("withdraw-input");
   const withdrawBalanceString = withdraw.value;
   const withdrawBalance = parseFloat(withdrawBalanceString);
   console.log(withdrawBalance);

   const withdrawTotalElement = document.getElementById("withdraw");
   const withdrawTotalElementString = withdrawTotalElement.innerText;
   const newWithdrawTotal = parseFloat(withdrawTotalElementString);

   withdraw.value = "";

   const balance = document.getElementById("balance");
   const balanceTotalString = balance.innerText;
   const newBalance = parseFloat(balanceTotalString);
   if (withdrawBalance > newBalance) {
      alert("sorry balance is low");
      return;
   }
   const currentWithdraw = newWithdrawTotal + withdrawBalance;
   withdrawTotalElement.innerText = currentWithdraw;

   const newBalanceTotal = newBalance - withdrawBalance;
   balance.innerText = newBalanceTotal;
});
