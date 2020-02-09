function getDataMkd(code){
    $.ajax({
        url:`https://restcountries.eu/rest/v2/alpha/${code}`,
        success: function(data){
            let country = data;
            console.log(country);
            getBorderingCountriesMkd(country);
        },
        error: function (error){
            console.log(error);
        }
        
    })
}
getDataMkd('mkd');

function getBorderingCountriesMkd(country) {
    for( const neighbors of country.borders){
    $.ajax({
        url:`https://restcountries.eu/rest/v2/alpha/${neighbors}`,
        success: function(neighbors){
            console.log(neighbors);;
        },
        error: function (error){
            console.log(error);
        }
    })
    }
}