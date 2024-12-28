function add_to_display(value){
    document.getElementById("display").value+=value
}
function clear_display(){
    document.getElementById("display").value=""
}
function calculate(){
    var display=document.getElementById("display").value
    var result=eval(display)
    document.getElementById("display").value=result
}