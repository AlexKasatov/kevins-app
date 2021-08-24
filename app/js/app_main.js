const totalCash = parseInt(prompt("Йо, Кевин, сколько кеша у тебя в наличии?"));

const watchesCount = parseInt(prompt("Сколько часов ты взял?"));

const earringsCount = parseInt(prompt("Ага, а сколько сережек с брилиантами?"));

const watchesCost = parseInt(prompt("Сколько стоят часы?"));

const earringsCost = parseInt(prompt("Сколько стоят сережки?"));

const enough = "с кешом все ок!";

const notEnough = "нужно идти в АТМ";

let haveEnough = (
  totalCash,
  watchesCount,
  earringsCount,
  watchesCost,
  earringsCost
) => {
  console.log(
    "Кевин, " +
      (totalCash >= earringsCount * earringsCost + watchesCount * watchesCost
        ? enough
        : notEnough)
  );
};
