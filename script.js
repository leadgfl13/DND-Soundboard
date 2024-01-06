

// This section contains the door audio files and a variable that is a random door audio pulled from the array//
let door1 = new Audio('sounds/door1')
let door2 = new Audio('sounds/door2.mp3')
let door3= new Audio('sounds/door3.mp3')
let door4 = new Audio('')

let doors = [door1, door2, door3]
let randomdoor = Math.floor(Math.random()* doors.length)


// This section contains the sound files for arrows files
let arrow1 = new Audio('sounds/arrows1')
let arrow2 = new Audio('sounds/arrow2.mp3')
let arrow3 = new Audio('sounds/arrow3.mp3')
let arrows = [arrow1,arrow2, arrow3]


// This section contains the sound files for boom files
let boom1 = new Audio('sounds/smallbomb.mp3')
let boom2 = new Audio('sounds/boom2.mp3')
let boom3 = new Audio('sounds/boom3.mp3')
let booms = [boom1, boom2, boom3]

// This section contains the sound files for clashes
let clash1 = new Audio('sounds/clash1.mp3')
let clash2 = new Audio('sounds/clash2.mp3')
let clash3 = new Audio('sounds/clash3.mp3')
let clashes = [clash1, clash2, clash3]

// This section contains the sound files for swooshes files
let swoosh1 = new Audio('sounds/swoosh1.mp3')
let swoosh2 = new Audio('sounds/swoosh2.mp3')
let swoosh3 = new Audio('sounds/swoosh3.mp3')
let swooshes = [swoosh1, swoosh2, swoosh3]

// This section contains the sound files for zap files
let zap1 = new Audio('')
let zap2 = new Audio('')
let zap3 = new Audio('')
let zaps = [zap1, zap2, zap3]


// This section contains the sound files for steps files
let steps1 = new Audio('')
let steps2 = new Audio('')
let steps3 = new Audio('')
let steps = [steps1, steps2, steps3]

// This section contains the sound files for thud files
let thud1 = new Audio('')
let thud2 = new Audio('')
let thud3 = new Audio('')
let thuds = [thud1, thud2, thud3]
//takes an array, and then returns a random number based on the specific array to the global scope via return function)

function createRandom(arrayname){
    random = (Math.floor(Math.random()*arrayname.length))
    return random

}


let b = new Audio('')
let c = new Audio (' ')
let d = new Audio(' ')
let e = new Audio('')
let f = new Audio(' ')
let g = new Audio(' ')
let h = new Audio(' ')


addEventListener('keypress', keyEvent)


function keyEvent(e){
    let key = e.key

 if (key == 'a' || key == 'A'){
     turnYellow(abox)
       createRandom(doors)
       doorchoice = doors[random]
       doorchoice.play()
       setTimeout(function(){turnWhite(abox)}, 1000);
     

    }    

 if (key =='b' || key == "B"){
    turnYellow(bbox)
    createRandom(arrows)
    arrowchoice = arrows[random]
    arrowchoice.play()
    setTimeout(function(){turnWhite(bbox)},1000)
       
}

if (key =='c' || key == "C"){
    turnYellow(cbox)
    createRandom(booms)
    boomchoice = booms[random]
    boomchoice.play()
    setTimeout(function(){turnWhite(cbox)},1000)

}

if (key == 'd' || key == 'D'){
    turnYellow(dbox)
    createRandom(clashes)
    clashchoices = clashes[random]
    clashchoices.play()
    setTimeout(function(){turnWhite(dbox)},1000)
}

if (key =='e' || key == "E"){
    turnYellow(ebox)
    createRandom(swooshes)
    swooshchoice = swooshes[random]
    swooshchoice.play()
    setTimeout(function(){turnWhite(ebox)},1000)
}


if (key == 'f' || key == 'F'){
    turnYellow(fbox)
    createRandom(zaps)
    zapchoice = zaps[random]
    zapchoice.play()
    setTimeout(function(){turnWhite(fbox)},1000)

}


if (key =='g' || key == "G"){
    turnYellow(gbox)
    createRandom(steps)
    stepchoice = steps[random]
    stepchoice.play()
    setTimeout(function(){turnWhite(gbox)},1000)


}
if (key == 'h' || key == 'H'){
    turnYellow(hbox)
    createRandom(thuds)
    thudchoice =thuds[random]
    thudchoice.play()
    setTimeout(function(){turnWhite(hbox)},1000)

}
}



//Create function to highlight the key box when pressed, and then white 
function turnYellow(keybox){
    keybox.style.backgroundColor = 'yellow'
}
function turnWhite(keybox){
    keybox.style.backgroundColor = 'white'
}

//Creates each box as an element in the DOM tree so we can change its color when pressed
let abox = document.getElementById('keyA')
let bbox = document.getElementById('keyB')
let cbox = document.getElementById('keyC')
let dbox = document.getElementById('keyD')
let ebox = document.getElementById('keyE')
let fbox = document.getElementById('keyF')
let gbox = document.getElementById('keyG')
let hbox = document.getElementById('keyH')

