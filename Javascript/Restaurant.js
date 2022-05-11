// Script général
  var total = 0
  var totalTaxes = 0
  var totalFinal = 0
// Rangés : croissant, baguette, saucisse, haricot, oeuf
// Colones : quantité, total
var items = [
  [ 0 , 0 ],
  [ 0 , 0 ],
  [ 0 , 0 ],
  [ 0 , 0 ],
  [ 0 , 0 ] ];


// Script pour passer à la section d'achat
function finirSelection() {
  // Afficher tout les items qui sont dans le chariot
  afficherQuantiteCroissant = document.getElementById("zoneQuantiteCroissant");
  afficherQuantiteCroissant.innerHTML = items[0][0];

  afficherQuantiteBaguette = document.getElementById("zoneQuantiteBaguette");
  afficherQuantiteBaguette.innerHTML = items[1][0];

  afficherQuantiteSaucisse = document.getElementById("zoneQuantiteSaucisse");
  afficherQuantiteSaucisse.innerHTML = items[2][0];

  afficherQuantiteHaricot = document.getElementById("zoneQuantiteHaricot");
  afficherQuantiteHaricot.innerHTML = items[3][0];

  afficherQuantiteOeuf = document.getElementById("zoneQuantiteOeuf");
  afficherQuantiteOeuf.innerHTML = items[4][0];

  // Total sans taxes ou livraison
  total = items[0][1] + items[1][1] + items[2][1] + items[3][1] + items[4][1];
  
  // S'il n'y a pas d'items selectionné
  if (total == 0) {
    afficherPasItem = document.getElementById("zonePasItem");
    // Donner un indice à l'utilisateur de selectionner un item
    afficherPasItem.innerHTML = "<h3>Vous n'avez pas selectionné d'items!</h3>";
  }
}


// Script pour Croissant
function ajouterCroissant() {
  // Ajouter au chariot, sauvegarder le montant et prix de croissant demandé
  quantiteCroissant = document.getElementById("quantiteCroissant").value;
  items[0][0] = quantiteCroissant;
  items[0][1] = items[0][0] * 499.99
  console.log(items.join(", "));
}


// Script pour Baguette
function ajouterBaguette() {
  // Ajouter au chariot, sauvegarder le montant et prix de baguette demandé
  quantiteBaguette = document.getElementById("quantiteBaguette").value;
  items[1][0] = quantiteBaguette;
  items[1][1] = items[1][0] * 399.99
  console.log(items.join(", "));
}


// Script pour Saucisse
function ajouterSaucisse() {
  // Ajouter au chariot, sauvegarder le montant et prix de saucisse demandé
  quantiteSaucisse = document.getElementById("quantiteSaucisse").value;
  items[2][0] = quantiteSaucisse;
  items[2][1] = items[2][0] * 449.99
  console.log(items.join(", "));
}


// Script pour Haricot
function ajouterHaricot() {
  // Ajouter au chariot, sauvegarder le montant et prix d'haricot demandé
  quantiteHaricot = document.getElementById("quantiteHaricot").value;
  items[3][0] = quantiteHaricot;
  items[3][1] = items[3][0] * 199.99
  console.log(items.join(", "));
}


// Script pour Oeuf
function ajouterOeuf() {
  // Ajouter au chariot, sauvegarder le montant et prix d'oeuf demandé
  quantiteOeuf = document.getElementById("quantiteOeuf").value;
  items[4][0] = quantiteOeuf;
  items[4][1] = items[4][0] * 299.99
  console.log(items.join(", "));
}


// Script pour Achat
function acheter() {
  // Trouver détails pour le prix, pour afficher sur le reçu
  province = document.getElementById("province").value;
  livraison = document.getElementById("livraison").value;
  totalTaxes = total * province;
  totalFinal = totalTaxes + parseInt(livraison);


  // Reçu
  recu = "<pre>*********************************************************************" + 
"<br>*                    REÇU - Déjeuners de Jacob                      *" + 
"<br>*********************************************************************" + 
"<br>" + 
"<ol>";

  // Liste des items
  if (items[0][0] > 0) {
    recu += "<li>  croissant   x" + items[0][0] + "    " + items[0][1] + "</li>";
  }
  if (items[1][0] > 0) {
    recu += "<li>  baguette    x" + items[1][0] + "    " + items[1][1] + "</li>";
  }
  if (items[2][0] > 0) {
    recu += "<li>  saucisse    x" + items[2][0] + "    " + items[2][1] + "</li>";
  }
  if (items[3][0] > 0) {
    recu += "<li>  haricot     x" + items[3][0] + "    " + items[3][1] + "</li>";
  }
  if (items[4][0] > 0) {
    recu += "<li>  oeuf        x" + items[4][0] + "    " + items[4][1] + "</li>";
  }
  recu += "</ol>";
  recu += "<br>------------------------------------------------------------";
  // Listes des autres couts et totals
  recu += "<br>Sous-total des items      " + total.toFixed(2);
  if (province == 1.13) {
    recu += "<br>Taxes (ON 13%)            " + (total * 0.13).toFixed(2);
  } else if (province == 1.15) {
    recu += "<br>Taxes (QC 15%)            " + (total * 0.15).toFixed(2);
  }
  recu += "<br>Sous-total                " + (totalTaxes).toFixed(2);
  recu += "<br>Livraison                 " + (parseInt(livraison)).toFixed(2);
  recu += "<br>TOTAL                     " + totalFinal.toFixed(2) + "$";
  
  recu += "<br>*********************************************************************" + 
"<br>*          Merci pour votre commande - Déjeuners de Jacob           *" + 
"<br>*********************************************************************";

  
  afficherRecu = document.getElementById("zoneRecu");
  afficherRecu.innerHTML = recu;


  // Bouton et boite de texte pour que l'utilisateur paye le montant requis
  afficherOptionPayer = document.getElementById("zoneOptionPayer");
  afficherOptionPayer.innerHTML = "<input type='text' id='argentDonne'>" + "<input type='button' id='btnPayer' onclick='payer()' value='Payer'/>";
}

function calculArgentRendu(montant) {
  // Enlever les billets/pièces qui sont rien
  if ((Math.trunc(argentRendu/montant)) != 0) {
    // Trouver s'il faut mettre billet/pièce et $/sous
    if (montant >= 5) {
      afficherSucces.innerHTML += Math.trunc(argentRendu/montant) +
      " billet de " + montant + "$<br>";
    } else if (montant <= 2 && montant >= 1) {
      afficherSucces.innerHTML += Math.trunc(argentRendu/montant) +
      " pièce de " + montant + "$<br>";
    } else if (montant <= 0.50) {
      afficherSucces.innerHTML += Math.trunc(argentRendu/montant) +
      " pièce de " + (montant*100) + " sous<br>";
    }
  }

  // Enlever la somme d'argent qui est prise par les billets/sous pour les prochains billets/sous de plus
  argentRendu = argentRendu - (Math.trunc(argentRendu/montant)*montant)
  console.log(argentRendu);
}

function payer() {
  argentDonne = document.getElementById("argentDonne").value;

  if (argentDonne >= totalFinal) {
    // Assez d'argent est remise, comande est complète
    argentRendu = argentDonne - totalFinal
    
    afficherSucces = document.getElementById("zoneResultatPayer");
    afficherSucces.innerHTML = "Votre nourriture Délicieuse est en route!"
    
    // Argent rendu
    afficherSucces.innerHTML += "<h4>Argent rendu:</h4>" 
    calculArgentRendu(100);
    calculArgentRendu(50);
    calculArgentRendu(20);
    calculArgentRendu(10);
    calculArgentRendu(5);
    calculArgentRendu(2);
    calculArgentRendu(1);
    calculArgentRendu(0.50);
    calculArgentRendu(0.25);
    calculArgentRendu(0.10);
    calculArgentRendu(0.05);
  } else {
    // Pas assez d'argent, mettre une nouveau montant
    afficherEchec = document.getElementById("zoneResultatPayer");
    afficherEchec.innerHTML = "Il n'y a pas assez d'argent!";
  }
}