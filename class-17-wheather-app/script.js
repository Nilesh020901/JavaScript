const form = document.querySelector('form');
const searchField = document.querySelector('.search-field');
const tempratureFeild = document.querySelector('.temp');
const cityFeild = document.querySelector('.loc p');
const dateFeild = document.querySelector('.loc span');
const emojiField = document.querySelector('.wheather-cond img');
const weatherFeild = document.querySelector('.wheather-cond span');

let target = 'Mumbai'

form.addEventListener('submit', search)

function search(e){
    e.preventDefault()
    target = searchField.value
    console.log(target)
    fetchData(target)
}

async function fetchData() {
    const endpoint = `http://api.weatherapi.com/v1/current.json?key=814562928a6e4b06be9160614241109&q=${target}&aqi=no`

    const response = await fetch(endpoint)

    const data = await response.json()

    console.log(data)
    
    let currentTemp = data.current.temp_c
    let cityName = data.location.name
    let cityTime = data.location.localtime

    let currentCondition = data.current.condition.text
    let conditionLogo = data.current.condition.icon

    updateWeatherData(currentTemp, cityName, cityTime, currentCondition, conditionLogo)

}

function updateWeatherData(currentTemp, cityName, cityTime, currentCondition, conditionLogo){
    tempratureFeild.innerText = currentTemp
    cityFeild.innerText = cityName
    dateFeild.innerText = cityTime
    weatherFeild.innerText = currentCondition
    emojiField.src = conditionLogo

}

