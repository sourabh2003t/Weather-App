let currCity = "Pune";
let units = "metric";


let city = document.querySelector(".city");
let weather_forecast = document.querySelector('.forecast');
let weather_temperature = document.querySelector("#temp");
let weather_icon = document.querySelector('.cloud');
let weather_feel = document.querySelector('#f');
let weather_hum = document.querySelector('#numH');
let weather_vis = document.querySelector('#numV');
let weather_press = document.querySelector('#numA');
let weather_speed = document.querySelector('#numW');

// More cities
//names
let citynam1 = document.querySelector('.one');
let citynam2 = document.querySelector('.two');
let citynam3 = document.querySelector('.three');
let citynam4 = document.querySelector('.four');
let citynam5 = document.querySelector('.five');
let citynam6 = document.querySelector('.six');
let citynam7 = document.querySelector('.seven');

//icons
let cli1 = document.querySelector('.o');
let cli2 = document.querySelector('.tw');	
let cli3 = document.querySelector('.th');
let cli4 = document.querySelector('.fo');
let cli5 = document.querySelector('.fi');
let cli6 = document.querySelector('.si');
let cli7 = document.querySelector('.se');

//temp
let t1 = document.querySelector('.t1');
let t2 = document.querySelector('.t2');
let t3 = document.querySelector('.t3');
let t4 = document.querySelector('.t4');
let t5 = document.querySelector('.t5');
let t6 = document.querySelector('.t6');
let t7 = document.querySelector('.t7');
//feels
let f1 = document.querySelector('.f1');
let f2 = document.querySelector('.f2');
let f3 = document.querySelector('.f3');
let f4 = document.querySelector('.f4');
let f5 = document.querySelector('.f5');
let f6 = document.querySelector('.f6');
let f7 = document.querySelector('.f7');

document.querySelector(".weather_search").addEventListener('submit',e => {
	let search = document.querySelector(".search");
	e.preventDefault();
	currCity = search.value;
	getWeather();
})



function getWeather(){
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})

}
function city1(){
	let currCity = "Pune";
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		citynam1.innerHTML = `${data.name}`
		cli1.innerHTML= `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		t1.innerHTML = `${data.main.temp.toFixed()}&#176`
		f1.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})
}

function city2(){
	let currCity = "Mumbai";
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		citynam2.innerHTML = `${data.name}`
		cli2.innerHTML= `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		t2.innerHTML = `${data.main.temp.toFixed()}&#176`
		f2.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})
}

function city3(){
	let currCity = "Hyderabad";
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		citynam3.innerHTML = `${data.name}`
		cli3.innerHTML= `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		t3.innerHTML = `${data.main.temp.toFixed()}&#176`
		f3.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})
}

function city4(){
	let currCity = "Jammu";
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		citynam4.innerHTML = `${data.name}`
		cli4.innerHTML= `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		t4.innerHTML = `${data.main.temp.toFixed()}&#176`
		f4.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})
}

function city5(){
	let currCity = "Nashik";
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		citynam5.innerHTML = `${data.name}`
		cli5.innerHTML= `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		t5.innerHTML = `${data.main.temp.toFixed()}&#176`
		f5.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})
}

function city6(){
	let currCity = "Nagpur";
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		citynam6.innerHTML = `${data.name}`
		cli6.innerHTML= `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		t6.innerHTML = `${data.main.temp.toFixed()}&#176`
		f6.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})
}

function city7(){
	let currCity = "Karnataka";
	const API_KEY = '18265796d1a96ea9af87f4349bdc33a0'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(
	res => res.json()).then(data => {
		citynam7.innerHTML = `${data.name}`
		cli7.innerHTML= `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		t7.innerHTML = `${data.main.temp.toFixed()}&#176`
		f7.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		city.innerHTML = `${data.name}`
		weather_forecast.innerHTML=`<p>${data.weather[0].main}`
		weather_temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
		weather_icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
		weather_feel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
		weather_hum.innerHTML = `${data.main.humidity}%`
		weather_press.innerHTML = `${data.main.pressure}hPa`
		weather_speed.innerHTML = `${data.wind.speed}m/s`
		weather_vis.innerHTML = `${data.visibility}m/s`
	})
}
document.body.addEventListener('load',getWeather(),city1(),city2(),city3(),city4(),city5(),city6(),city7())
document.body.addEventListener('load',getWeather())