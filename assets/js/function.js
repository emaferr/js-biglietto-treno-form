function cancellaDati() {
    // window.location.reload();

    // Primo metodo utilizzato per resettare la pagina

    document.getElementById("dati_utente").reset();
    // document.getElementById("nome_biglietto").innerHTML = "";
    // document.getElementById("codice_treno").innerHTML = "";
    // document.getElementById("numero_carrozza").innerHTML = "";
    // document.getElementById("costo_biglietto").innerHTML = "";
    // document.getElementById("offerta").innerHTML = "";
}

function generaBiglietto() {
    // Nome passeggero
    var nomeUtente = document.getElementById("nome_utente").value;

    var chilometri = document.getElementById("chilometri_percorso").value;

    if ( chilometri < 10 || chilometri > 1500 ) {
        alert("Il tragitto percorso dai nostri treni va da 5 a 1550 chilometri")
    } else if (isNaN (chilometri) ) {
        alert("Il valore chilometri inserito non è corretto. Inserire un numero compreso fra 5 e 1500")   
    } else {

    }

    // Categoria selezionata dall'utente
    var categoriaUtente = document.getElementById("exampleFormControlSelect1").value;
    
    // Prezzo calcolato
    var prezzoBiglietto = chilometri * 0.21;

    if (categoriaUtente == "Minorenne") {
        prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 20) / 100);
        document.getElementById("offerta").innerHTML = "Sconto Minorenne"
    }else if (categoriaUtente == "Over 65 anni"){
        prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 40) / 100);
        document.getElementById("offerta").innerHTML = "Sconto Over 65 anni"
    }else{
        document.getElementById("offerta").innerHTML = "Nessuna offerta applicabile"
    }

    document.getElementById("nome_biglietto").innerHTML = nomeUtente;
    document.getElementById("codice_treno").innerHTML = codiceTreno;
    document.getElementById("numero_carrozza").innerHTML = carrozzaTreno;
    document.getElementById("costo_biglietto").innerHTML = (new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR'}).format(prezzoBiglietto));
    document.getElementById("qrcode").style.display = "block";
}

function newQR() {
    document.getElementById('qrcode').src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + codiceTreno
  }
  newQR()