function SwitchToList(){

document.getElementById('ImagesAreHere').classList.remove('grid-container');
document.getElementById('ImagesAreHere').classList.add('list-container');

}

function SwitchToGrid(){

    document.getElementById('ImagesAreHere').classList.remove('list-container');
    document.getElementById('ImagesAreHere').classList.add('grid-container');
    
    }