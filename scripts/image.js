let text = '{"images" : [{"ImageName":"ImageA","CreationDate":"2024-02-13","Artist":"Janne Kiianen","Location":"images/A.png"},{"ImageName":"ImageB","CreationDate":"2024-02-13","Artist":"Janne Kiianen","Location":"images/B.png"},{"ImageName":"ImageC","CreationDate":"2024-02-13","Artist":"Janne Kiianen","Location":"images/C.png"},{"ImageName":"ImageD","CreationDate":"2024-02-15","Artist":"Janne Kiianen","Location":"images/D.png"}]}';
const myImages = JSON.parse(text);
i = 0;
if (localStorage.hasOwnProperty('latestIndex')){i = localStorage.getItem('latestIndex');}
let Status


window.onload = function setImages()
{
    document.getElementById('SuperImage').src = myImages.images[i].Location;
    document.getElementById('SuperText').innerHTML = myImages.images[0].ImageName + " by " +  myImages.images[0].Artist;
    Status = setInterval(RightButton, 2000)
}

function RightButton()
{
    $("#SuperImage").fadeOut("slow", function() {
    let ImageSlot = document.getElementById('SuperImage');
    if (i < myImages.images.length - 1){i++}
    else if (i == myImages.images.length - 1){i = 0}
    localStorage.setItem('latestIndex', i)
    ImageSlot.src = myImages.images[i].Location;
    ImageSlot.alt = myImages.images[i].ImageName;
    document.getElementById('SuperText').innerHTML = myImages.images[i].ImageName + " by " +  myImages.images[i].Artist;
      });
    $( "#SuperImage" ).fadeIn( "slow", function() {
        
      });
}

function LeftButton()
{
    $("#SuperImage").fadeOut("slow", function() {
    let ImageSlot = document.getElementById('SuperImage');
    if (i == 0){i = myImages.images.length - 1}
    else if (i > 0){i--}
    localStorage.setItem('latestIndex', i)
    ImageSlot.src = myImages.images[i].Location;
    ImageSlot.alt = myImages.images[i].ImageName;
    document.getElementById('SuperText').innerHTML = myImages.images[i].ImageName + " by " +  myImages.images[i].Artist;});
    $( "#SuperImage" ).fadeIn( "slow", function() {
        
    });
}

function MiddleButton()
{
    if (Status == null) {Status = setInterval(RightButton, 2000)}
    else {clearInterval(Status); Status = null}
    if(document.getElementById("PlayOrPause").className == "bi bi-play-circle-fill")
    document.getElementById("PlayOrPause").className = "bi bi-pause-circle-fill";
    else
    document.getElementById("PlayOrPause").className = "bi bi-play-circle-fill";
    
}





