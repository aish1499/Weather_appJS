const key = '63hO68tgR00LmNLF7vNIcYpzCUgWNVKg';

const getWeather = async id =>{
    const base ="http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data =await response.json();
    return data;
}

const getCity = async city =>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response= await fetch(base + query);
    const data =await response.json();
    return data[0];

};
// getWeather("213490")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//getCity("rome")

//getCity('banglore').then(data=> console.log(data)).then (err=>console.log(err));