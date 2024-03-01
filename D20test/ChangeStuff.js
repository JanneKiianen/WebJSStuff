window.onload = function()
{
    if (localStorage.hasOwnProperty('Dice')){document.getElementById('DiceHere').src = localStorage.getItem('Dice');}   
}

function ChangeRed()
{
    document.getElementById('DiceHere').src = 'Images/D20-red.png'
    localStorage.setItem('Dice', 'Images/D20-red.png')
}

function ChangeBlue()
{
    document.getElementById('DiceHere').src = 'Images/D20-blue.png'
    localStorage.setItem('Dice', 'Images/D20-blue.png')
}

function ChangeGold()
{
    document.getElementById('DiceHere').src = 'Images/D20-gold.png'
    localStorage.setItem('Dice', 'Images/D20-gold.png')
}

function ChangePurple()
{
    document.getElementById('DiceHere').src = 'Images/D20-purple.png'
    localStorage.setItem('Dice', 'Images/D20-purple.png')
}

function ChangeGreen()
{
    document.getElementById('DiceHere').src = 'Images/D20-green.png'
    localStorage.setItem('Dice', 'Images/D20-green.png')
}
function ChangeSilver()
{
    document.getElementById('DiceHere').src = 'Images/D20-silver.png'
    localStorage.setItem('Dice', 'Images/D20-silver.png')
}
function ChangePink()
{
    document.getElementById('DiceHere').src = 'Images/D20-pink.png'
    localStorage.setItem('Dice', 'Images/D20-pink.png')
}