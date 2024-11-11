var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {

  var inputEta = document.getElementById("fascia-eta");
  var eta = inputEta.value;
  console.log(eta);

  var inputNome = document.getElementById("nome-utente");
  var nomeUtente = inputNome.value;
  console.log(nomeUtente);


  var inputKm = document.getElementById("km");
  var percorrenza = parseInt(inputKm.value);
  console.log(percorrenza);

  var prezzoAlKilometro = 0.21;
  var prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
  console.log(prezzoBigliettoSenzaSconto);

  var offerta = "Tariffa Standard"

  if (eta == "minorenne") {
   ((prezzoBigliettoSenzaSconto / 100) * 80);
   offerta = "Sconto Minorenne";
  } else if (eta == "over65") {
   ((prezzoBigliettoSenzaSconto / 100) * 60);
   offerta = "Sconto Maggiorenne";
  } else {
   (prezzoBigliettoSenzaSconto);
  }

  var carrozza = Math.floor(Math.random() * 9) +1;
  var cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;


  document.getElementById('nome-passegero').innerHTML = nomeUtente;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('costo-biglietto').innerHTML = prezzoBigliettoSenzaSconto.toFixed(2);
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice-cp').innerHTML = cp;

  var bigliettoDiv = document.getElementById('biglietto');
  bigliettoDiv.classList.remove('hidden');
  bigliettoDiv.classList.add('show');

 }

);


var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener( 'click',
  function() {
    document.getElementById('nome-passegero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo-biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';


    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';
    
    var bigliettoDiv = document.getElementById('biglietto')
    bigliettoDiv.classList.remove('show');
    bigliettoDiv.classList.add('hidden');
  }
);