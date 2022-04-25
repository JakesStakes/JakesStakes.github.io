function genererMadlibs() {
  vetements1 = document.getElementById("vetements1").value;
  nourritureDet2 = document.getElementById("nourritureDet2").value;
  actionInf3 = document.getElementById("actionInf3").value;
  ami4 = document.getElementById("ami4").value;
  nourriturePlu5 = document.getElementById("nourriturePlu5").value;
  adjectif6 = document.getElementById("adjectif6").value;
  actionInf7 = document.getElementById("actionInf7").value;
  adverbeMent8 = document.getElementById("adverbeMent8").value;
  nourriture9 = document.getElementById("nourriture9").value;
  nom10 = document.getElementById("nom10").value;
  adjectif11 = document.getElementById("adjectif11").value;

  sortie = "J’adore l’été !  Chaque jour, quand je suis en vacances, je me réveille, je mets mes " + 
  vetements1 + 
  ", je me rend à la cuisine et je mange " + 
  nourritureDet2 + 
  " pour déjeuner. Ensuite, mon activité préféré est de " +
  actionInf3 +
  " avec mon ami " +
  ami4 +
  ". À 14h, je dîne.  Je mange des " +
  nourriturePlu5 +
  " " +
  adjectif6 +
  ". Durant l’après-midi, j’aime me rendre au parc et de " +
  actionInf7 +
  " " +
  adverbeMent8 +
  ". En soirée, je mange toujours du " +
  nourriture9 +
  " pour le souper.  Finalement, je me couche et je rêve de " +
  nom10 +
  ". Quel été " +
  adjectif11 +
  "!";
      
      
  afficherSortie = document.getElementById("zoneSortie");
  afficherSortie.innerHTML = "<br>" + sortie;
}