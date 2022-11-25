
// Overture et fermeture du formulaire

export function editNav() {
    let x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

// Overture et fermeture du formulaire avec JAVASRIPT

const openModalBtn = document.querySelectorAll('.modal-btn');
const closeModalBtn = document.querySelector('#js-close-modal');
const modalbg = document.querySelector("#js-modal");

// DOM Elements

openModalBtn.modalbg = document.querySelector(".modal-bground");

// launch modal dysplay

 export function launchModal() {
   modalbg.style.display = "block";
}

closeModalBtn.modalBtn = document.querySelector('#js-close-modal');

// toggle modal form

 export function toggleModal() {
   modalbg.style.display = "none"; 
}

