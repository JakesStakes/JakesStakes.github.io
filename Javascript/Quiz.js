function soumettreQuiz() {
  var resultatFinal = 0

  
  var radiosR1 = document.getElementsByName("R1");
  var R1 = "";
  for (i=0; i < radiosR1.length; i++) {
    if (radiosR1[i].checked) {
      R1 = radiosR1[i].value;
    }
  }
  if (R1 == "bien") {
    resultatFinal += 1;
  }
  resultat1 = R1;
  
  
  var checkR2 = document.getElementsByName("R2");
  var R2 = 0;
  for (i=0; i < checkR2.length; i++) {
    if (checkR2[i].checked) {
      R2 += parseInt(checkR2[i].value);
    }
  }
  if (R2 == 3) {
    resultat2 = "bien";
    resultatFinal += 1;
  } else {
    resultat2 = "mal";
  }

  
  var R3 = document.getElementById("Q3").value;
  if (R3 == "bien") {
    resultatFinal += 1;
  }
  resultat3 = R3


  afficherResultat1 = document.getElementById("zoneResultat1");
  afficherResultat1.innerHTML = "<br>" + resultat1;


  afficherResultat2 = document.getElementById("zoneResultat2");
  afficherResultat2.innerHTML = "<br>" + resultat2;


  afficherResultat3 = document.getElementById("zoneResultat3");
  afficherResultat3.innerHTML = "<br>" + resultat3;

  
  resultatFinal += "/3"
  afficherResultatFinal = document.getElementById("zoneResultatFinal");
  afficherResultatFinal.innerHTML = "<br>" + resultatFinal;
}