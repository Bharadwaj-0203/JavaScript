

function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '591e3f3cde27e1bf38bfd7f5e3d7a365';
    const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiURL)
        .then (response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );