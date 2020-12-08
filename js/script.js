let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let reqCosts = prompt("Введите обязательную статью расходов в этом месяце", ""),
    price = prompt("Во сколько обойдётся?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        costs: reqCosts,
        howMany: price
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let budgetForOneDay = appData.budget / 30; 

alert(budgetForOneDay + " рублей в день");
console.log(appData);