var initiales = "";
var nomComplet = "";
var nomUtilisateur = "";
var prenom = "";
var nomMilieu = "";
var nomFamille = "";
var afficherInitiales = "";
var afficherNomComplet = "";
var afficherNomUtilisateur = "";

    
function chercherNoms() {
  prenom = document.getElementById("txtPrenom").value;
  nomMilieu = document.getElementById("txtNomMilieu").value;
  nomFamille = document.getElementById("txtNomFamille").value;
}

    
function afficheInitiales() {
  chercherNoms();
  initiales = prenom.charAt(0) + "." + nomMilieu.charAt(0) + "." + nomFamille.charAt(0) + ".";
  afficherInitiales = document.getElementById("zoneInitiales");
  afficherInitiales.innerHTML = "<br>" + initiales;
}
function afficheNomComplet() {
  chercherNoms();
  nomComplet = prenom + " " + nomMilieu + " " + nomFamille;
  afficherNomComplet = document.getElementById("zoneNomComplet");
  afficherNomComplet.innerHTML = "<br>" + nomComplet;
}
function afficheNomUtilisateur() {
  chercherNoms();
  nomUtilisateur = prenom.charAt(0) + nomMilieu.charAt(0) + nomFamille;
  nomUtilisateur = nomUtilisateur.toLowerCase();
  afficherNomUtilisateur = document.getElementById("zoneNomUtilisateur");
  afficherNomUtilisateur.innerHTML = "<br>" + nomUtilisateur;
}