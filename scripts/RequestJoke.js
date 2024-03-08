let i = 0;
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
i++
document.getElementById("accordionJokes").innerHTML += '<div class="accordion-item"> <p class="accordion-header" id="Fact' + i + '"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Fact ' + i + '</button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"> <p id=JokeHere' + i +'><p> </div> </div> </div>'
$.getJSON('https://api.chucknorris.io/jokes/random',
    function(result) {
        $("#JokeHere" + i).append(result.value + "<br>");
        
        if (i ==1) {document.getElementById("NumberHere").innerHTML = "you have requested " + i + " fact";}
        else {document.getElementById("NumberHere").innerHTML = "you have requested " + i + " facts"}
        
    })
}