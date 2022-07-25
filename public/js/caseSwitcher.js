
let text = document.getElementById('patrick').innerHTML;

function quiet(){
    let lowered = String(text).toLowerCase();
    console.log(lowered)
    document.getElementById("patrick").innerHTML = lowered;
}
function loud(){
    let loud = String(text).toUpperCase();
    console.log(loud)
    document.getElementById('patrick').innerHTML = loud
}
function sarc(){
    var str = '';
    for (item in String(text)){
        if (text[item] != ''){
            if (item % 2 == 0){
                str = str + text[item].toUpperCase()
            }else{
                str = str + text[item].toLowerCase()
            }
        }
    }
    document.getElementById('patrick').innerHTML = str
}


//when `sarc-btn` is clicked it should be changed to *sArCaSm CaSe*.
