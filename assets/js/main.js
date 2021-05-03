// Creiamo un finto biglietto del treno con:

// Codice treno (numero casuale tra 90000 e 100000 escluso)
var codiceTreno = Math.floor(Math.random() * (100000 - 90000) + 90000);

// Numero carrozza
var carrozzaTreno = Math.floor(Math.random() * (2 - 11) + 11);

function newQR() {
    var x = Math.floor((Math.random() * 99) + 1);
    document.getElementById('qrcode').src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + x
  }
  newQR()