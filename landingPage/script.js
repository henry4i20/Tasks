var nomeGlobal
var msgGlobal
function ConferirMensagem(){
    var nome=document.getElementById("nome").value;
    var mensagem=document.getElementById("mensagem").value;

nomeGlobal=nome
msgGlobal=mensagem

document.getElementById("confNome").textContent=nome;
document.getElementById("confMsg").textContent=mensagem;

}

function enviar(){
    var numeroTelefone="5541996761342";

    var link= "https://wa.me/" + numeroTelefone + "?text=Nome: "+ nomeGlobal + "-" +"Mensagem: " +msgGlobal;
    window.open(link,'_blank') ;  
}