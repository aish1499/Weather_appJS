// console.log(1);
// console.log(1);
// setTimeout(()=>{
//     console.log("function called");

// },2000);
// console.log(3);
// console.log(4);


// const getTodos = resource => {
//     return new Promise(resolve,reject =>{
// const request = new XMLHttpRequest();
// request.open = ("GET",resource);
// //request.open("GET", "http://jsonplaceholder.typicode.com/todos/");
// request.send();

// request.addEventListener('readystatechange', e=>{
//     //console.log(request.readystate);
//    if (request.readystate===4 && request.status===200)
//    {
//        resolve(request.responseText);
//     console.log("data ready!");
//    }else if(request.readystate===4 ){
//     console.log("data not found");
//    }
//   });
//  });
// getTodos("http://jsonplaceholder.typicode.com/todos/1");

// }

const CityForm = document.querySelector('form');
const card = document.querySelector('card');
const detail = document.querySelector('detail');
const icon = document.querySelector('.icon img')
const time = document.querySelector('time');
const updateGUI = details =>{
    const {cityDetail,weather} = data;
    console.log("citydetail");
    console.log("weather");
  details.innerHTML=`
<h3 class="my-3">${cityDetail.EnglishName}</h3>
<div class="my-3">${weather.Weathertext}</div>

<span>${currentTime.getHours()}:${currentTime.getMinutes()}</span>
<div class="display-4 my-3">
<span>${weather.Temperature.Metric.value}</span>
<span>&deg;C</span>
</div>
</div>`

};
let  timeSrc = '';
if(weather.IsDayTime){
    timeSrc ="'images/day.svg'"
}
else{
    timeSrc="'images/day.svg'";
}


time.setAttribute('src',timeSrc);
iconSrc = `icons/${weather.WeatherIcon}.svg`
icon.setAttribute('src', iconSrc)



const updateCity= async (data) =>{
    
    const cityDetail = await getCity(city);
    const weather = await getWeather(cityDetail.key);

    return{
        cityDetail: cityDetail,
        weather:weather
    };
};
 
 
CityForm.addEventListener("submit", e => {
    e.preventDefault();
    const city = CityForm.city.value.trim();
    updateCity(city)
    .then(data => updateGUI(data))
    .catch(err => console.log(err));

    if(card.classList.contains("d-none")){
        card.classList.remove("d-none")
    }
});