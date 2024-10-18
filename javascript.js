let result =document.getElementById('result');
let search =document.getElementById('searchbtn');
let cityref =document.getElementById('city');
let key ='1817820e669f124589091e8bfa02ce26'

let getweather= ()=>{

    let cityvalue = cityref.value;

    if(cityvalue.length == 0){
        result.innerHTML="<h1>Enter the city name</h1>"


    }
    else {
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&APPID=${key}&units=metric`;
     cityref.value="";
     fetch(url)
     .then((reps)=> reps.json())
     .then((data)=>{

      //   document.getElementById('name').innerHTML=`${data.name}`
        // result.innerHTML=`
        // <h2>${data.name}</h2>
        // <h4 class="weather">${data.weather[0].main}</h4>
        // <h4 class="desc">${data.weather[0].description}</h4>
        // <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
        // <h1>${data.main.temp} &#176;</h1>
        // <div class="temp-container">  
        // <div>
        // <h4 class='title'>Min</h4>
        // <h4 class='temp'>${data.main.temp_min}</h4>
        // </div> 
        // <div>
        // <h4 class='title'>Max</h4>
        // <h4 class='temp'>${data.main.temp_max}</h4>
        // </div> 
        
        // </div>
        // `;
        
        result.innerHTML=`
        <h5>${data.name}</h5>
            <div class="weather-one">
                    <div class="weather-cloud">
                          <h4 class="weather">${data.weather[0].main}</h4>
                          <h4 class="desc">${data.weather[0].description}</h4>
                          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="imag">
                       
                    </div>
                    <div class="weather-cloud">
                        
                          <h3>${data.main.temp}<span>&#8451;</span></h3>
                        
                    </div>
                </div>
                        <div class="weather-two">
                            <label for="max">Max</label>
                            <h1  id="max">${data.main.temp_max}</h1>
                            <label for="max">Min</label>
                            <h1 id="max">${data.main.temp_min}</h1>
                          
                        </div>
            </div>`

     })
     .catch(() => {

        result.innerHTML='<h3 class="msg">City Not Found</h3>'

     });


     }
    };
    search.addEventListener("click",getweather);
    window.addEventListener("load",getweather);


