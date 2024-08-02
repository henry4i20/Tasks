var nomeGlobal
var msgGlobal
var imgatual="img/buzz.jpg";
var imganterior="img/ponto-de-interrogacao.png";

function trocar(){
    document.getElementById("ref").src=imgatual;
    let aux=imgatual;
    imgatual=imganterior;
    imganterior=aux;
}
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
