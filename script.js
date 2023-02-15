// setting clock

var x = document.getElementById("time");
setInterval(()=>
{
    let d_1 = new Date();
    x.innerHTML = d_1;
}, 1000);

// using the weather api
const popcity_1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'ceaf09b56bmsh35ba8a936d137afp1b69dfjsnb182e03963ad',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', popcity_1)
	.then(response => response.json())
	.then((response) => {
        console.log(response);
        temp_1.innerHTML = response.temp;
    })
	.catch(err => console.error(err));

const popcity_2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':'ceaf09b56bmsh35ba8a936d137afp1b69dfjsnb182e03963ad',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', popcity_2)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            temp_2.innerHTML = response.temp;
        })
        .catch(err => console.error(err));

const popcity_3 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':'ceaf09b56bmsh35ba8a936d137afp1b69dfjsnb182e03963ad',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', popcity_3)
            .then(response => response.json())
            .then((response) => {
                console.log(response);
                temp_3.innerHTML = response.temp;
            })
            .catch(err => console.error(err));

const popcity_4 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key':'ceaf09b56bmsh35ba8a936d137afp1b69dfjsnb182e03963ad',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };
            
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow', popcity_4)
                .then(response => response.json())
                .then((response) => {
                    console.log(response);
                    temp_4.innerHTML = response.temp;
                })
                .catch(err => console.error(err));

const popcity_5 = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key':'ceaf09b56bmsh35ba8a936d137afp1b69dfjsnb182e03963ad',
                        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                    }
                };
                
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', popcity_5)
                    .then(response => response.json())
                    .then((response) => {
                        console.log(response);
                        temp_5.innerHTML = response.temp;
                    })
                    .catch(err => console.error(err));

// enabling searchbar

const options = {
	method: 'GET',
    headers: {
		'X-RapidAPI-Key': '68cde08d85msh6d7135f042e8e25p1069ccjsn4b5416c72bcc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city.toUpperCase();
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            searchedTemp.innerHTML = response.temp;
            searchedMinTemp.innerHTML = response.min_temp;
            searchedMaxTemp.innerHTML = response.max_temp;
            feelsLike.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

getWeather("amsterdam");

search.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})