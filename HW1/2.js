/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

Отслеживать, какой повар готовит какое блюдо.
Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров, а также для хранения
заказов каждого клиента. В качестве ключей для поваров и клиентов используйте 
объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

"use strict";

const chefsSpecialization = new Map();

chefsSpecialization.set("Виктор", "Пицца");
chefsSpecialization.set("Ольга", "Суши");
chefsSpecialization.set("Дмитрий", "Десерты");

const dishesChef = new Map();

dishesChef.set("Пицца Маргарита", "Виктор");
dishesChef.set("Пицца Пепперони", "Виктор");
dishesChef.set("Суши Филадельфия", "Ольга");
dishesChef.set("Суши Калифорния", "Ольга");
dishesChef.set("Тирамису", "Дмитрий");
dishesChef.set("Чизкейк", "Дмитрий");

const clientOrders = new Map();

clientOrders.set("Алексей", ["Пицца Пепперони", "Тирамису"]);
clientOrders.set("Мария", ["Суши Калифорния", "Пицца Маргарита"]);
clientOrders.set("Ирина", ["Чизкейк"]);

function findChefForDish(dishName) {
  const chefName = dishesChef.get(dishName);
  return chefName ? `Повар ${chefName}` : "Блюдо не найдено";
}

function findOrdersForClient(clientName) {
  const orders = clientOrders.get(clientName);
  return orders ? orders.join(", ") : "Заказы не найдены";
}

console.log(findChefForDish("Пицца Пепперони")); // Виктор
console.log(findOrdersForClient("Мария")); // Суши Калифорния, Пицца Маргарита
console.log(findChefForDish("Салат")); // Блюдо не найдено
console.log(findOrdersForClient("Петр")); // Заказы не найдены
