let input = document.getElementById ("amount");


input.addEventListener ("blur", function () {
  fetch ("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=468c7865e0ba4a83989b466849e4d59e").then (function(result) {
  let getData = result.json();
  console.log (getData);
  return getData;
}).then (function (currency) {
  let egpField = document.querySelector (".egp span ");
  let sarField = document.querySelector (".sar span ");
  egpField.innerHTML = Math.round(input.value * currency.rates["EGP"]);
  sarField.innerHTML = Math.round(input.value * currency.rates["SAR"]);

  

  
})
})

