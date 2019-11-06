const express = require('express')

const app = express()

app.get('', (req, res) => {    // html response
	res.send('<h1>Hello<h1>');
})

app.get('/help', (req, res) => { //json response
	res.send({
		name: 'ANSHUL',
		age:29
	});
})

app.get('/about', (req, res) => { //array of objects
	res.send([{
		about:'This is a company portfolio',
	},{
		info :'This is a company for weather display'
	}
	]);
})

app.get('/weather', (req, res) => {
	res.send({
		location:'Philadelphia',
		forecast: '29 degress'
	});
})

app.get('/contacts', (req, res) => {
	res.send('<h1>HTML</h1>');
})

app.listen(3000, () => {
	console.log('Server Running')
})