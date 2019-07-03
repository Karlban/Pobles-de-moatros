var quotes = [
	'sangonera', 'trompellot', 'xafaxarcos', 'botaxarcos', 'xafaxancles', 'tros de figa', 'castellà', 
	'me cague en la mare quel va fer', 'botabancals', 'serril', 'cara enfarlopà', 'samarro', 
	'si te pegue un hosti ací amb la ma oberta t\'arreglo totes les dents que tens', 'aneu a fer la ma', 'mongolic', 
	'que et follen a tu i al monduver', 'malparit'

	]

	function newQuote() {
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
	}