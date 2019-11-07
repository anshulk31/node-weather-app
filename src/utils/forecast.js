const request = require('request')

const forecast = (latitude ,longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/0ea2c7cecaa4baf2ec8a14ea64cb7429/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + ''

	request({url, json:true}, (error, { body }) => {
	
		if(error){
			callback('Unable to connect to weather api', undefined)
		}
		else if(body.error){
			callback('Unable to find location', undefined)
		}
		else {
			callback(undefined,
			 body.daily.data[0].summary +'It is currently ' + body.currently.temperature +' degress out. There is a '+body.currently.precipProbability+'% chances of rain.' 
			+ 'Highest Tempertaure for the day : '  +body.daily.data[0].temperatureHigh + '  Lowest Temperature for the day :'  +body.daily.data[0].temperatureLow)}
	})

}

module.exports = forecast

//git push heroku master.
