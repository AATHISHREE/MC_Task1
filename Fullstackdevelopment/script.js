async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "aba2fb2fe49456f2af47fe6345bb6341"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("description").innerText = data.weather[0].description;
    document.getElementById("temperature").innerText = data.main.temp;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;
    document.getElementById("updatedTime").innerText = new Date(data.dt * 1000).toLocaleString();

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("weatherIcon").src = iconUrl;

    document.getElementById("weatherCard").classList.remove("hidden");
  } catch (error) {
    alert("Error: " + error.message);
  }
}

