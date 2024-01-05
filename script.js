

// This section contains the door audio files and a variable that is a random door audio pulled from the array//
let door1 = new Audio('sounds/door1')
let door2 = new Audio('sounds/door2.mp3')
let door3= new Audio('')
let door4 = new Audio('')

let doors = [door1, door2]
let randomdoor = Math.floor(Math.random()* doors.length)


// This section contains the sound files for arrows files
let arrow1 = new Audio('sounds/arrows1')
let arrow2 = new Audio('sounds/arrow2.mp3')
let arrow3 = new Audio('')
let arrows = [arrow1,arrow2]


// This section contains the sound files for boom files
let boom1 = new Audio('sounds/smallbomb.mp3')
let boom2 = new Audio('')
let boom3 = new Audio('')
let booms = [boom1]

// This section contains the sound files for clashes
let clash1 = new Audio('')
let clash2 = new Audio('')
let clash3 = new Audio('')
let clashes = [clash1, clash2, clash3]

// This section contains the sound files for swooshes files
let swoosh1 = new Audio('')
let swoosh2 = new Audio('')
let swoosh3 = new Audio('')
let shwooshes = [swoosh1, swoosh2, swoosh3]

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
    createRandom(clashes)
    clashchoices = clashes[random]
    clashchoices.play()
}

if (key =='e' || key == "E"){
    createRandom(swooshes)
    swooshchoice = swooshes[random]
    swooshchoice.play()
}


if (key == 'f' || key == 'F'){
    createRandom(zaps)
    zapchoice = zaps[random]
    zapchoice.play()
}


if (key =='g' || key == "G"){
    createRandom(steps)
    stepchoice = steps[random]
    stepchpice.play()

}
if (key == 'h' || key == 'H'){
    createRandom(thuds)
    thudchoice =thuds[random]
    thudchoice.play()
}
}



//Create function to highlight sound effect, or key
function turnYellow(keybox){
    keybox.style.backgroundColor = 'yellow'
}
function turnWhite(keybox){
    keybox.style.backgroundColor = 'white'
}

let abox = document.getElementById('keyA')
let bbox = document.getElementById('keyB')
let cbox = document.getElementById('keyC')
