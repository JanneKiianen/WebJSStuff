

function search(){
    let address = document.forms["MapData"]["streetadress"].value.replace(" ","");
    console.log(address);
    let city = document.forms["MapData"]["city"].value;
    console.log(city);
    let mapurl = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
     iframeElement.src = mapurl;
};

