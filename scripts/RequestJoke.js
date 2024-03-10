let i = 0;
window.onload = function HideSpinner()
{
    document.getElementById("SuperSpinner").style.display = "none";
}

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
document.getElementById("accordionJokes").innerHTML += '<div class="accordion-item"> <h2 class="accordion-header">' + 
                        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i + 
                        '" aria-expanded="false" aria-controls="collapse' + i + '"> Fact ' + i + 
                        '</button></h2><div id="collapse' + i + 
                        '" class="accordion-collapse collapse"' + 
                        'data-bs-parent="#accordionJokes"><div class="accordion-body"> <p id=JokeHere' + i + 
                        '><p> </div> </div> </div>'
document.getElementById("SuperSpinner").style.display = "block";

$.getJSON('https://api.chucknorris.io/jokes/random',
    function(result) {
        
        $("#JokeHere" + i).append(result.value + "<br>");
        
        if (i ==1) {document.getElementById("NumberHere").innerHTML = "you have requested " + i + " fact";}
        else {document.getElementById("NumberHere").innerHTML = "you have requested " + i + " facts"}
        
    })
    .done(function() {document.getElementById("SuperSpinner").style.display = "none";}
    )
}