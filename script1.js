function myFun1(){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            //openweathermap.org weather API
            //current weather url
           // url: 'http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=01cb98df795eddb3efab2e1afb6e564a&units=metric',
            url: 'https://api.weatherbit.io/v2.0/forecast/daily?city=pune&key=e6827e9fb99d4cbca0822b6d0cc85c42'
            success: (res) => {
                var infohead= ''
                console.log(res);
                infohead +=
                    `   
                    <p>${res.city_name}</p>               
                    `
                $('.pune').append(infohead);
    
            }
        })
}