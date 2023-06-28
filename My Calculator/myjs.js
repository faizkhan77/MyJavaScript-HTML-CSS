var display;

function insertNum(number){
    display = document.getElementById('myinp');
    display.value += number
}


function insertOp(OP){
    display = document.getElementById('myinp');
    display.value += OP
}


function result(){
    display.value = eval(display.value)
}

function clearbtn(){
    display.value = '';
}

function deletebtn(){
    var value = display.value;
    var deletedUpdate = value.slice(0, -1);
    display.value = deletedUpdate;
}

function exitbtn(){
    window.close()
}