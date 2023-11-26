const express = require('express');
const app = express();
const Quote = require('inspirational-quotes');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	const quote = Quote.getQuote()
	res.send(`${quote.text} - ${quote.author}`)
})

app.get('/health', (req, res) => {
	res.status(200).send("Don't worry, server is up and running..")
})

app.listen(port, () => { console.log('Express app running on port', port)});