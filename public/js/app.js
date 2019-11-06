
// fetch('http://localhost:3000/weather?address=!').then((response) => {
// 	response.json().then((data)=> {
// 		if(data.error){
// 			console.log(data.error)
// 		}else{
// 			console.log(data.location);
// 			console.log(data.forecast)
// 		}
		
// 	})
// })

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const result1 = document.querySelector("#message1")
const result2 = document.querySelector("#message2")



weatherForm.addEventListener("submit",(e) => {
	e.preventDefault()

	const location = search.value

	result1.textContent = "Loading....."
	result2.textContent = ''

	fetch('http://localhost:3000/weather?address=' +location).then((response) => {

		response.json().then((data)=> {
			
			if(data.error){
				result1.textContent = data.error
			}
			else{
				result1.textContent = data.location
				result2.textContent = data.forecast
				
			}
			
		})
		weatherForm.reset()
	})	
})