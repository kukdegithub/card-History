function myFun(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        //openweathermap.org weather API
        //current weather url
        url: 'http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=01cb98df795eddb3efab2e1afb6e564a&units=metric',
        success: (res) => {
            var infohead= ''
            console.log(res);
            infohead +=
                `   
                <div>             
                <h5>Temp. : ${res.main.temp}&#8451;</h5>
                <p>${res.name} ${res.sys.country}</p>
                <div>      
                `
            $('.mumbaimain').append(infohead);

        }
    }),


    $.ajax({
        type: 'GET',
        dataType: 'json',
        //openweathermap.org weather API
        //current weather url
        url: 'http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=01cb98df795eddb3efab2e1afb6e564a&units=metric',
        success: (res) => {
            var infohead= ''
            console.log(res);
            infohead +=
                `   
                <div>             
                <h5>Temp. : ${res.main.temp}&#8451;</h5>
                <p>${res.name} ${res.sys.country}</p>
                <div>      
                `
            $('.delhimain').append(infohead);
        }
    })

}