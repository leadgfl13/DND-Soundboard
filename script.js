

// This section contains the door audio files and a variable that is a random door audio pulled from the array//
let door1 = new Audio('sounds/door1')
let door2 = new Audio('')
let door3= new Audio('')
let door4 = new Audio('')

let doors = [door1]
let randomdoor = Math.floor(Math.random()* doors.length)


// This section contains the sound files for arrows files
let arrow1 = new Audio('')
let arrow2 = new Audio('')
let arrow3 = new Audio('')
let arrows = [arrow1, arrow2, arrow3]


// This section contains the sound files for boom files
let boom1 = new Audio('')
let boom2 = new Audio('')
let boom3 = new Audio('')
let booms = [boom1, boom2, boom3]

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
       createRandom(doors)
       doorchoice = doors[random]
       doorchoice.play()

    }    

 if (key =='b' || key == "B"){
    createRandom(arrows)
    arrowchoice = arrows[random]
    arrowchoice.play()
        }

if (key =='c' || key == "C"){
    createRandom(booms)
    boomchoice = booms[random]
    boomchoice.play()
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