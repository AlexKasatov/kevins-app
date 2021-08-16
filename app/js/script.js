const totalCash = parseInt(prompt("Йо, Кевин, сколько кеша у тебя в наличии?"));

const watchesCount = parseInt(prompt("Сколько часов ты взял?"));

const earringsCount = parseInt(prompt("Ага, а сколько сережек с брилиантами?"));

const watchesCost = parseInt(prompt("Сколько стоят часы?"));

const earringsCost = parseInt(prompt("Сколько стоят сережки?"));

const totalPurchases =
  earringsCount * earringsCost + watchesCount * watchesCost;

const totalBalance = totalCash >= totalPurchases;

document.body.innerHTML = totalBalance;
