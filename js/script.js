let money = prompt("Ваш бюджет на месяц?", "10 000 руб"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let reqCosts = prompt("Введите обязательную статью расходов в этом месяце", ""),
    price = prompt("Во сколько обойдётся?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        reqCosts: price
    }
};

let budgetForOneDay = reqCosts / 30; 

alert(budgetForOneDay + " рублей в день");
console.log(appData);