let haveEnough = (money, apple, bread, applePrice, breadPrice) => {
	var money = prompt('Сколько у вас с собой есть денег?');
	var apple = prompt('Сколько вы купили яблок?');
	var bread = prompt('Сколько вы купили батонов хлеба?');
	var applePrice = prompt('Cколько стоит одно яблоко?');
	var breadPrice = prompt('Сколько стоит один батон хлеба?');
	var totalPrice = apple*applePrice + bread*breadPrice;
	document.write(money>=totalPrice);
}
haveEnough();

