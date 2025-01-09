burger = document.querySelector('.burger')
navBar = document.querySelector('.navBar')
navContent = document.querySelector('.navContent')

burger.addEventListener('click', ()=>{
	navContent.classList.toggle('visibPhone');
	navBar.classList.toggle('hNavPhone');
})


const date = document.querySelector('.btnSmall');
function currDate() {
	const d = new Date()
	const fullDate = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
	document.getElementById("currentDate").innerHTML = fullDate;
}
date.addEventListener("click", currDate);




const getWthr = (city) =>{	
	const apiUrl = `https://api.weatherapi.com/v1/current.json?key=c72e92899ff44dfcada65931250801&q=${city}`;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e759ca0fdd00586c182d3d799fd57ab5`;

	const search = document.querySelector('.btnSmall');
function surprise() {
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			if (data && data.current) {
				const weather = data.current;
				const locationName = data.location.name;
				const region = data.location.region;
				const country = data.location.country;
				const temperature = weather.temp_c;
				const humidity = weather.humidity;
				const windSpeed = weather.wind_kph;
				const weatherHtml = `
					<h4>${locationName}, ${region}, ${country}</h4>
				`;
				const temperHtml = `
 					<p>Temperature - ${temperature} °C</p>
 				`;
				const humidHtml = `
					<p>Humidity - ${humidity}%</p>
				`;
				const windHtml = `
					<p>Wind Speed - ${windSpeed} km/h</p>
				`;
				document.getElementById('region').innerHTML = weatherHtml;
				document.getElementById('temper').innerHTML = temperHtml;
				document.getElementById('humid').innerHTML = humidHtml;
				document.getElementById('windSpd').innerHTML = windHtml;
			} else {
				document.getElementById('region').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
			}
		})
		.catch(error => {
			console.error('Error fetching data:', error);
			document.getElementById('region').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
		});
}
search.addEventListener("click", surprise);



const search5 = document.querySelector('.btn');
function surprise5() {
	fetch(url)
		.then(response => response.json())
		.then(data => {
			if (data && data.sys) {

				const sunriseTimestamp = data.sys.sunrise;
				const sunsetTimestamp = data.sys.sunset;
    			const sunrise = new Date(sunriseTimestamp * 1000).toLocaleTimeString();
    			const sunset = new Date(sunsetTimestamp * 1000).toLocaleTimeString();
 
				const sunriseHtml = `
					<p>Sunrise - ${sunrise}</p>
				`;
				const sunsetHtml = `
 					<p>Sunset - ${sunset}</p>
 				`;
				 document.getElementById('sunr').innerHTML = sunriseHtml;
 				document.getElementById('suns').innerHTML = sunsetHtml;
			} else {
				document.getElementById('sunr').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
			}
		})
		.catch(error => {
			console.error('Error fetching data:', error);
			document.getElementById('sunr').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
		});
}
search5.addEventListener("click", surprise5);
}

submit.addEventListener("click",(f)=>{
	f.preventDefault()
	getWthr(city.value)
})
getWthr("Kharagpur")






// const search = document.querySelector('.btnSmall');
// function surprise() {
// 	fetch(apiUrl)
// 		.then(response => response.json())
// 		.then(data => {
// 			if (data && data.current) {
// 				const weather = data.current;
// 				const locationName = data.location.name;
// 				const region = data.location.region;
// 				const country = data.location.country;
// 				const weatherHtml = `
// 					<h4>${locationName}, ${region}, ${country}</h4>
// 				`;
// 				document.getElementById('region').innerHTML = weatherHtml;
// 			} else {
// 				document.getElementById('region').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 			document.getElementById('region').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
// 		});
// }
// search.addEventListener("click", surprise);



// const search2 = document.querySelector('.btn');
// function surprise2() {
// 	fetch(apiUrl)
// 		.then(response => response.json())
// 		.then(data => {
// 			if (data && data.current) {
// 				const weather = data.current;
// 				const temperature = weather.temp_c;
// 				const weatherHtml = `
// 					<p>${temperature} °C</p>
// 				`;
// 				document.getElementById('temper').innerHTML = weatherHtml;
// 			} else {
// 				document.getElementById('temper').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 			document.getElementById('temper').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
// 		});
// }
// search2.addEventListener("click", surprise2);



// const search3 = document.querySelector('.btn');
// function surprise3() {
// 	fetch(apiUrl)
// 		.then(response => response.json())
// 		.then(data => {
// 			if (data && data.current) {
// 				const weather = data.current;
// 				const humidity = weather.humidity;
// 				const weatherHtml = `
// 					<p>${humidity}%</p>
// 				`;
// 				document.getElementById('humid').innerHTML = weatherHtml;
// 			} else {
// 				document.getElementById('humid').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 			document.getElementById('humid').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
// 		});
// }
// search3.addEventListener("click", surprise3);



// const search4 = document.querySelector('.btn');
// function surprise4() {
// 	fetch(apiUrl)
// 		.then(response => response.json())
// 		.then(data => {
// 			if (data && data.current) {
// 				const weather = data.current;
// 				const windSpeed = weather.wind_kph;
// 				const weatherHtml = `
// 					<p>${windSpeed} km/h</p>
// 				`;
// 				document.getElementById('windSpd').innerHTML = weatherHtml;
// 			} else {
// 				document.getElementById('windSpd').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 			document.getElementById('windSpd').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
// 		});
// }
// search4.addEventListener("click", surprise4);





// const search5 = document.querySelector('.btn');
// function surprise5() {
// 	fetch(url)
// 		.then(response => response.json())
// 		.then(data => {
// 			if (data && data.sys) {

// 				const sunriseTimestamp = data.sys.sunrise;
//     			const sunrise = new Date(sunriseTimestamp * 1000).toLocaleTimeString();
 
// 				const sunriseHtml = `
// 					<p>${sunrise}</p>
// 				`;
// 				document.getElementById('sunr').innerHTML = sunriseHtml;
// 			} else {
// 				document.getElementById('sunr').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 			document.getElementById('sunr').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
// 		});
// }
// search5.addEventListener("click", surprise5);



// const search6 = document.querySelector('.btn');
// function surprise6() {
// 	fetch(url)
// 		.then(response => response.json())
// 		.then(data => {
// 			if (data && data.sys) {

//     			const sunsetTimestamp = data.sys.sunset;
//     			const sunset = new Date(sunsetTimestamp * 1000).toLocaleTimeString();
    			
// 				const sunsetHtml = `
// 					<p>${sunset}</p>
// 				`;
// 				document.getElementById('suns').innerHTML = sunsetHtml;
// 			} else {
// 				document.getElementById('suns').innerHTML = '<p>Error: Unable to fetch weather data.</p>';
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Error fetching data:', error);
// 			document.getElementById('suns').innerHTML = '<p>Error: Unable to fetch weather data. Check your Internet Connection.</p>';
// 		});
// }
// search6.addEventListener("click", surprise6);