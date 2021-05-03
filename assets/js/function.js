function cancellaDati() {
    document.getElementById("dati_utente").reset();
}

function generaBiglietto() {
    var nomeUtente = document.getElementById("nome_utente").value;
    var codiceTreno = Math.floor(Math.random() * (100000 - 90000) + 90000);
    var carrozzaTreno = Math.floor(Math.random() * (2 - 11) + 11);
    document.getElementById("nome_biglietto").innerHTML = nomeUtente;
    document.getElementById("codice_treno").innerHTML = codiceTreno;
    document.getElementById("numero_carrozza").innerHTML = carrozzaTreno;

    console.log(nomeUtente);
    console.log(codiceTreno);
}