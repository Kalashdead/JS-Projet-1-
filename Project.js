const prompt = require("prompt-sync")()

console.log; ("Bienvenue au donjon de RI7 veuillez choisir votre classe : appuyez entrée pour continuez  ")

let choice = prompt("Choisissez votre personnage: 'sorcier' ou 'guerrier'");
while (choice != "sorcier" && choice != "guerrier" ) {
    choice = prompt ("choix invalide : sorcier ou guerrier : ")
}
if (choice == "sorcier") {

    console.log("vous avez le sorcier imbattu au ping-pong le fameux marlin-brendan");
    choice = prompt("Vous arriver devant le donjon / appuyez entré pour la suite")
    console.log("marlin-brendan rentre dans le donjon avec sa raquette de ping-pong");
    console.log("a : tu tire une balle de ping-pong qui allumera les torche du donjon  ");
    console.log("b : tu cours le plus vite possible ne te mangant un mur");
    choice = prompt("choisis entre a et b : ")
    while (choice != "a" && choice != "b" ) {
        choice = prompt ("choix invalide : a ou b : ")
    }
    if (choice == "a") {
        console.log("toutes les torches s'allumes et tu peut avancer mon grand");
        console.log("");
        console.log("tu avance et tu tombes sur un monstre qui ressemble a faresse (pas de cheveux)");
        prompt("tue-le et tu gagnera la raquettes ultime de ping-pong")
        console.log("a : tu lui envoie la raquette sacrée du saint-vasquez");
        console.log("b : tu ne fait rien");
        choice = prompt("choisis entre a et b : ")
        while (choice != "a" && choice != "b" ) {
            choice = prompt ("choix invalide : a ou b : ")
        }
        if (choice == "b") {
            console.log("le monstre et mort de patience sans te voir bouger quel ennuie en tout cas tu a gagner mon jeux pourrie");
            console.log("FÉLICITATION MERCI ET A JAMAIS <3");

        }

    } else {
        console.log("tu tes éclater le crane et te retrouve allonger sur thomas inerte");

    }






} else {
    console.log("tu est le guerrier thomas invaincu au JS les yeux bandé");
    console.log("Vous arriver devant le donjon / appuyez entré pour la suite");
    prompt("tu rentre dans le donjon dans sans ta cigarrete electronique virginia ses mieux")
    console.log("a : tu gratte une clope dans le donjon a un monstre");
    console.log("b : tu continue sans clope mes tu te tape dans le mur");
    choice = prompt("choisis entre a et b : ")
    while (choice != "a" && choice != "b" ) {
        choice = prompt ("choix invalide : a ou b : ")
    }


    if (choice == "a") {
        console.log("le monstre te donne une clope electronique avec ton gout preferé");
        console.log("en fumant cet clope electronique antique tu remarque que tes talents sont décuplé");
        console.log("tu vois un levier le déclenche tu ?")
        console.log("a : oui");
        console.log("b : non");
        choice = prompt("a ou b ? : ")
        while (choice != "a" && choice != "b" ) {
            choice = prompt ("choix invalide : a ou b : ")
        }
    } else {
        console.log("tes mort en tombant dans des piques");
    }


    if (choice == "b") {
        console.log("tu continue a avancer et te disant mes que fesait ce levier");

        console.log("En continuant tu vois une lumiere au fond et le cadavre de marlin-brendan le crane ouvert contre un mur");
        console.log("veut tu fouillez ce corps de looser ? ")
        console.log("a : fouillez le corps ")
        console.log("b : ne pas fouillez le corps ")
        choice = prompt("choisie entre a et b : ")
        while (choice != "a" && choice != "b" ) {
            choice = prompt ("choix invalide : a ou b : ")
        }
    } else {

        console.log("le monstre ses foutu de toi en te regardant fouillez , ta rien pour le combattre tu tes fait arracher");

    }

    if (choice = "a") {

        console.log("alors ... vous avez trouver un ak-ri7 une arme a vrai dire wtf .. il a fumé quoi le narrateur ?");
        console.log("UN MONSTRE !!!! VITE TROUVER LE BON CHOIX AVEC TOUT SES CHOIX !");
        prompt("veuillez patientez")
        prompt("veuillez patientez")
        prompt("veuillez patientez")
        prompt("veuillez patientez")
        prompt("veuillez patientez")
        prompt("veuillez patientez")
        prompt("veuillez patientez")
        prompt("veuillez patientez")
        console.log("toujours la ? xD");
        console.log("a : tirer avec l'arme et tuer le monstre ses ez en faite")
        console.log("b : tirer mes pas sur le monstre je pense que ses tres con mes bon")
        choice = prompt("faite votre dernier choix")
        while (choice != "a" && choice != "b" ) {
            choice = prompt ("choix invalide : a ou b : ")
        }
        if (choice = "b" || "a") {

            console.log("vous avez tuer le monstre ! thomas a découvert tailwind !");

        } console.log("bien jouer");
    }
}








