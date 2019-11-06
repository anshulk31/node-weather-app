const express = require('express')
const path = require('path');

const app = express()


/*------DEFINE PATHS FOR EXPRESS CONFIG --------------*/
const publicDirectoryPath = path.join(__dirname, '../public')

/*------SETUP STATIC DIRECTORY TO SERVE-----------------*/
app.use(express.static(publicDirectoryPath)) //express.static is a function
// this a way to customize your server
//static takes the path folder we have ie publicDirectoryPath



/*------SETUP HANDLEBARS ENGINE AND VIEW LOCATION----------*/
app.set('view engine', 'hbs'); //set allows us to set a value for a given express setting
/*A template engine enables you to use static template files in your application.
At runtime, the template engine replaces variables in a template file with actual values,
and transforms the template into an HTML file sent to the client. 
This approach makes it easier to design an HTML page.
*/
/*
view engine, the template engine to use. 
For example, to use the hbs template engine: app.set('view engine', 'hbs').
*/


app.get('', (req, res) => {
	res.render('index', {
		title:'The weather for the day is as follows',
		location:'Phildephia',
		forecast: '29 degress'
	})
})

app.listen(3000, () => {
	console.log('Server Running')
})


/*https://expressjs.com/en/guide/using-template-engines.html*/