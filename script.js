let keyA = document.getElementById('keyA')

addEventListener('keypress', keyEvent)

function keyEvent(e){
    let key = e.key

 if (key =='b' || key == "B"){
        alert("hello b")
    }
if (key == 'a' || key == 'A'){
    alert('hello a')
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