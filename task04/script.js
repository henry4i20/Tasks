function calc(){
    var n1=parseFloat(document.getElementById("n1").valueAsNumber);
    var n2=parseFloat(document.getElementById("n2").valueAsNumber)
    var resp=document.getElementById("res")
    resp.innerHTML=(n1/(n2*n2)).toFixed(2)
}