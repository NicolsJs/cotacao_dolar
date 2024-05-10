fetch("https://api-cotacao-ars.vercel.app/ars_cotation")
	.then((response) => response.json())
	.then((data) => {
		// Preenchendo os valores de compra e venda do dólar
		document.getElementById("dollar_0").innerText = data.dolar.dolarCompra;
		document.getElementById("dollar_1").innerText = data.dolar.dolarVenda;
		console.log(data);
		// Preenchendo os valores de compra e venda do euro
		document.getElementById("euro_0").innerText = data.euro.euroCompra;
		document.getElementById("euro_1").innerText = data.euro.euroVenda;

		// Preenchendo a data da cotação
		document.getElementById("date_currency_quote").innerText = `Data da Cotação: ${data.dolar.dataCotacao}`;
	})
	.catch((error) => console.error("erro ao gerar os dados da API:", error));
