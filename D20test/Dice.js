//DO NOT EDIT!

let i = 720

function ROLL()
{
    $('#spinnable').animate(
      { deg: i },
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now  + 'deg)'});
        }  
      }
    );
    i = i + 720;
    setTimeout(() => { number1 = Math.floor(Math.random() * 20) + 1; }, 1000); 
    setTimeout(() => { document.getElementById('NumberHere').innerHTML = number1; }, 1000);
    setTimeout(() => { $("#NumberHere").fadeIn();}, 1300);
};