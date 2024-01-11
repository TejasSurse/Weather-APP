//let city = document.getElementById('namecity');
let container = document.querySelector(".container");
let search = document.querySelector('.search_box button');
let weatherBox = document.querySelector('.weather-box');
let weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', ()=>{
	async function checkWeather() {
		const apiKey = '0af979fdc28f0ea1eb074f789a5a8735';
		let c = document.querySelector('.search_box input').value; // Default to "DELHI" if cityValue is empty
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=${apiKey}`;
	
		if (c === '') {
			return;
		}
	
		try {
			let response = await fetch(apiUrl);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			let data = await response.json();
			const image = document.querySelector('.weather-box img');
			const temperature = document.querySelector('.weather-box .temperature');
			const description = document.querySelector('.weather-box .description');
			const humidity = document.querySelector('.weather-details .humidity span');
			const wind = document.querySelector('.weather-details .Wind span');
			

			switch(data.weather[0].main){
			case 'Clear':
				image.src = 'images/clear.png';
				break;

			case 'Rain':
				image.src = 'images/rain.png';
				break;
			case 'Snow' || 'Light snow':
				image.src = 'images/snow.png';
				break;
			case 'Mist':
				image.src = 'images/mist.png';
				break;
			case 'Clouds':
				images.src= 'images/cloud/png';
				break;
			default:
				image.src ='images/cloud.png';
			}
			console.log(data);
			console.log(data.wind.speed);
			let dec = `${data.weather[0].description}`;
			console.log(dec);
			temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
			description.innerHTML = dec;
			humidity.innerHTML = `${data.main.humidity}%`;
			wind.innerHTML = `${data.wind.speed}km/h`;
			
		} catch (error) {
			let dec = document.querySelector('.description');
			let img = document.querySelector('.weather-box img')
			dec.innerHTML = "City Not Found";
			img.src = 'images/404.png';			
			console.error('Error:', error.message);
		}
	}
	// console.log(city);
	// console.log(city.value);
	
	checkWeather();
	
});
