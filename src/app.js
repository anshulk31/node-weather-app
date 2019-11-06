const express = require('express')
const path = require('path');
const hbs = require('hbs')

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

/*------DEFINE PATHS FOR EXPRESS CONFIG --------------*/
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

/*------SETUP HANDLEBARS ENGINE AND VIEW LOCATION----------
view engine, the template engine to use. 
For example, to use the hbs template engine: app.set('view engine', 'hbs').
*/
app.set('view engine', 'hbs'); //set allows us to set a value for a given express setting


/*views, the directory where the template files are located. 
	Eg: app.set('views', './views'). 
	This defaults to the views directory in the application root directory.
*/
app.set('views', viewPath)
hbs.registerPartials(partialsPath)



/*------SETUP STATIC DIRECTORY TO SERVE-----------------*/
app.use(express.static(publicDirectoryPath)) 
//This is a built-in middleware function in Express. 
//It serves static files and is based on serve-static.
// this a way to customize your server
//static takes the path folder we have ie publicDirectoryPath


app.get('', (req, res) => {
	res.render('index', {
		title:'The weather for the day is as follows',
		location:'Phildephia',
		forecast: '29 degress',
		name: 'Your Sky'
	})
})

app.get('/about', (req, res) => {
	res.render('about',{
		title:'About',
		clicked: 'Anshul',
		name: 'Your Sky'

	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title:'Help',
		message: 'Using hbs as the default view engine requires just one line of code in your app setup. This will render .hbs files when res.render is called.',
		name: 'Your Sky'
	})
})

app.get('/weather', (req, res) => {
	if(!req.query.address){
		return res.send({
			error:"address not provided"
		})
	}
	geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
		// {latitude, longitude, location} = {} is assigned to blank object 
		// that's because if don't pass the location then we will get the exact error.
		if(error){
			return res.send({error})
		}

		forecast(latitude, longitude, (error, Forecastdata) => {
		  if(error){
		  	return res.send({error})
		  }
		  else{
			res.send({
				location,
				forecast: Forecastdata
			});					  	
		  }
		})	
	})		
})

app.get('/products', (req, res) => {
	if(!req.query.search){
		return res.send({
			error:"search not provided"
		})
	}

	console.log(req.query.search)
	res.send({
		products:[]
	})
})

app.get('/help/*', (req, res) => {
	res.render('test',{
		error:'Help Article not found'
	})
})

app.get('*', (req, res) => {
	res.render('test',{
		error:'Page not found'
	})
})

app.listen(port, () => {
	console.log('Server Running')
})