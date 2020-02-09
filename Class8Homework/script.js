function getDataMkd(){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/alpha/mkd",
        success: function(data){
            let country = data;
            console.log(country);
            console.log(getBorderingCountriesMkd(country));
        },
        error: function (error){
            console.log(error);
        }
        
    })
}
getDataMkd();

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
},