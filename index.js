const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(200).json({ message: "Success.." })
})

app.get('/health', (req, res) => {
	res.status(200).json({ message: "Server is up and running.." })
})

app.get('/details', (req, res) => {
	res.status(200).json({ message: "This is a demo project to set up CI pipeline using GitHub Actions" })
})

app.listen(port, () => { console.log('Express app running on port', port)});