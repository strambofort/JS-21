"use strict";
let title = "Project";
console.log(typeof title);
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = 25;
let fullPrice = 1000;
console.log(typeof fullPrice);
let adaptive = true;
console.log(typeof adaptive);
console.log(screens.length);
let cost = "Стоимость верстки экранов ";
let currency = " рублей";
console.log(cost + screenPrice + currency);
let sitePrice = "Стоимость разработки сайта ";
console.log(sitePrice + fullPrice + currency);
let lower = (screens.toLowerCase());
console.log(lower.split(", "));
let cash = "Процент отката посреднику за работу ";
console.log(cash + (fullPrice * (rollback / 100)));

title = prompt("Как называется ваш проект?");
screens = prompt("Какие типы экранов нужно разработать?", "Простые или Сложные или Интерактивные");
screenPrice = +prompt("Сколько будет стоить данная работа?");
adaptive = confirm("Нужен ли адаптив на сайте?");

console.log(adaptive);
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));
console.log(servicePercentPrice);
console.log(fullPrice);
if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}