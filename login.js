function getInputValue(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  return inputValue;
}

document.getElementById("log-in").addEventListener("click", function () {
  const email = getInputValue("user");
  const password = getInputValue("password");
  if (email == "kishor9" && password == 123456) {
    window.document.location.href = "bank/bank.html";
  } else {
    alert("Your data is not valid.");
  }
});
