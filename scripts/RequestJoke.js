/*function RequestButton()
{
fetch('https://api.chucknorris.io/jokes/random')
.then(function (joke) {
     
    return joke.json();
})
.then(function (result) {
    if (result.message) {
        document.getElementById("JokeHere").innerHTML += "<br>" + "<i>" + result.message + "</i>";
    } else {
        
        document.getElementById("JokeHere").innerHTML += "<br>" + "<i>" + result.value + "</i>";
        
    }
})
.catch(function (error) {
    //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
    console.log(error);
});
}*/

function RequestButton(){
$.getJSON('https://api.chucknorris.io/jokes/random',
    function(result) {
        $("#JokeHere").append(result.value + "<br>");
        
    })
}