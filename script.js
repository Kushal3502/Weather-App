// API_KEY : `3265874a2c77ae4a04bb96236a642d2f`
// API : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// IMG_URL : `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const API_KEY = "3265874a2c77ae4a04bb96236a642d2f";
const searchbox = document.querySelector("#searchbox");
const searchbtn = document.querySelector("#searchbtn");
const display = document.querySelector(".display");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setWeather(data);
};

const setWeather = (data) => {
  display.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png" alt="" />
            <h1>${data.name}</h1>
            <h2>${Math.floor(data.main.temp)}℃</h2>
            <h4>${data.weather[0].main}</h4>
    `;
};

searchbtn.addEventListener("click", () => {
  console.log(searchbox.value);
  const city = searchbox.value;
  getWeather(city);
  searchbox.value = "";
});
