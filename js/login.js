document.getElementById("submit-btn").addEventListener("click", function () {
   const emailField = document.getElementById("email-field");
   const emailValue = emailField.value;

   const passwordField = document.getElementById("password-field");
   const passwordValue = passwordField.value;

   if (emailValue === "gaziur.tahmid@gmail.com" && passwordValue === "tahmid") {
      window.location.href = "index.html";
   } else {
      alert('ki miya tik kore lekho,,')
   }
});
