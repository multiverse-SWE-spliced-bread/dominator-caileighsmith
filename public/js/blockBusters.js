let block1 = document.getElementById('block-1').innerHTML
let parent = document.getElementById('blocks')

function goAway(x){
    x.style.visibility = "hidden";
}

for (let i = 2; i <= 100; i++){
    newBlock = document.createElement('div');
    newBlock.setAttribute("id", "block-"+i)
    newBlock.setAttribute("class", "red-block")
    newBlock.setAttribute("onmouseover", "goAway(this)")
    parent.appendChild(newBlock)

}

