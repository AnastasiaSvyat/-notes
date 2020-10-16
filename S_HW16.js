let newText = document.getElementById('newText')
let button = document.querySelector('button')
let boxOne = document.getElementById('boxOne')
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById('modal-content')
button.onmousedown = function(){
    if(newText.value == ""){
        modal.style.display = 'block'
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    else{
    let paragraph = document.createElement('p')
    let input = document.createElement('input')
        input.id = 'fff'
        input.type = 'checkbox'
        input.addEventListener('input',function(){
    if (input.checked) {
        input.remove()
        label.remove()
    }
    })
    let label= document.createElement('label');
        label.innerHTML = newText.value
        paragraph.append(input)
        paragraph.append(label)
        boxOne.append(paragraph)
}
}
button.onmouseup = function(){
    newText.value = ""
}




