
// Instruction  fonction affichage responsive

export function editNav() {
    let x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

// Instruction déclaration des constantes

const openModalBtn = document.querySelectorAll('.modal-btn');
const closeModalBtn = document.querySelector('#js-close-modal');
const modalbg = document.querySelector("#js-modal");

// Instruction Elements DOM à selectionnés pour ouverture et la fermerture du modal

openModalBtn.modalbg = document.querySelector(".modal-bground");
closeModalBtn.modalBtn = document.querySelector('#js-close-modal');

// Instruction fonctions à exécutées lors de l'ouverture et la fermeture du modal

     // launch modal dysplay ouverture du modal

 export function launchModal() {
   modalbg.style.display = "block";
}
     // toggle modal form  fermeture du modal

 export function toggleModal() {
   modalbg.style.display = "none"; 
}

