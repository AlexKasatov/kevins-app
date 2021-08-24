//Первый вариант: просто проверяет достаточно ли денег, если введено числовое значение.

let haveEnough = () => {
    const totalCash = parseInt(
      prompt("Йо, Кевин, сколько кеша у тебя в наличии?")
    );
  
    const watchesCount = parseInt(prompt("Сколько часов ты взял?"));
  
    const earringsCount = parseInt(
      prompt("Ага, а сколько сережек с брилиантами?")
    );
  
    const watchesCost = parseInt(prompt("Сколько стоят часы?"));
  
    const earringsCost = parseInt(prompt("Сколько стоят сережки?"));
  
    const totalPurchases =
      earringsCount * earringsCost + watchesCount * watchesCost;
  
    totalCash >= totalPurchases
      ? (document.body.innerHTML = "C кешом все ок!")
      : (document.body.innerHTML = "Сорри, нужно идти в АТМ");
  };
  
  //Второй вариант: проверяет на ошибку, если введено нечисловое значение, а строковое.
  
  let haveEnough2 = () => {
    const totalCash = parseInt(
      prompt("Йо, Кевин, сколько кеша у тебя в наличии?")
    );
  
    const watchesCount = parseInt(prompt("Сколько часов ты взял?"));
  
    const earringsCount = parseInt(
      prompt("Ага, а сколько сережек с брилиантами?")
    );
  
    const watchesCost = parseInt(prompt("Сколько стоят часы?"));
  
    const earringsCost = parseInt(prompt("Сколько стоят сережки?"));
  
    const totalPurchases =
      earringsCount * earringsCost + watchesCount * watchesCost;
  
    if (totalCash >= totalPurchases) {
      document.body.innerHTML = "C кешом все ок!";
    } else if (totalCash < totalPurchases) {
      document.body.innerHTML = "Сорри, нужно идти в АТМ";
    } else {
      document.body.innerHTML = "Ввел не число";
    }
  };
  

