const express = require('express') // express is just a single function

const app = express() // we call it to create a new express application
// it doesn't take in any arguments
// we configure our servers by provides various methods


app.get('', (req, res) => {
	res.send('Hello');
})
// app.get -->  this lets us configure the what the server should do when use the user tries to get.

app.get('/help', (req, res) => {
	res.send('Help Page');
})

app.get('/about', (req, res) => {
	res.send('This is a compony portfolio');
})

app.get('/weather', (req, res) => {
	res.send('See the weather in new tyork');
})

app.listen(3000, () => {
	console.log('Server Running')
})	
// to start the server we use app.listen 