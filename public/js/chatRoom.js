
let input = document.getElementById('chatInput')
let parent = document.getElementById("chat")
function send(){
    if (input.value != ''){
        console.log(input.value)
        let value = input.value
        let newP = document.createElement("p")
        let node = document.createTextNode(String(value))
        parent.appendChild(newP)
        newP.appendChild(node)
        input.value = ''
    }
    

}