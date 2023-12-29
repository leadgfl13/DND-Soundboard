

// This section contains the door audio files and a variable that is a random door audio pulled from the array//
let door1 = new Audio('')
let door2 = new Audio('')
let door3= new Audio('')
let door4 = new Audio('')

let doors = [door1, door2, door3, door4]
let randomdoor = Math.floor(Math.random()* doors.length)


//takes an array, and then returns a random number based on the specific array to the global scope via return function)
createRandom(arrayname){
let random = Math.floor(Math.random()*arrayname.length)
return(random)
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
        alert('hello a')
        createRandom(doors)
        doors.random.play()

    }    

 if (key =='b' || key == "B"){
        a.play()
    }

if (key =='c' || key == "C"){
    alert("hello c")
}
if (key == 'd' || key == 'D'){
alert('hello d')
}

if (key =='e' || key == "E"){
    alert("hello e")
}
if (key == 'f' || key == 'F'){
alert('hello f')
}
if (key =='g' || key == "G"){
    alert("hello g")
}
if (key == 'h' || key == 'H'){
alert('hello h')
}
}

