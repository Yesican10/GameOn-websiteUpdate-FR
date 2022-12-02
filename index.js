

// Instruction tableaux des objets importés
 
 import { isValidForm, isValidFirstname, isValidLastname, isValidEmail, 

    isValidBirthdays, isValidTournois, isValidRadios, isValidCheckbox } from './form.js';

 import { launchModal, toggleModal, editNav } from './modal.js';


// Instruction déclaration des constantes bouton modal

     const openModalBtn = document.querySelectorAll('.modal-btn');
     const closeModalBtn = document.querySelector('#js-close-modal');

// L'événement click permettant de déclencher une fonction lors de la fermeture du menu bouton

 document.getElementById('menu-btn').addEventListener('click', function(e) {

         editNav();
});
    
// L'évènement click permettant de déclencher une fonction lors d'ouverture du modal 

 openModalBtn.forEach((btn) => {

     btn.addEventListener('click', launchModal);
});

// L'évènement click permettant de déclencher une fonction lors de la fermeture du modal 

 closeModalBtn.addEventListener('click', toggleModal);


// L'événement submit permet de déclencher une fonction lors de l'envoi du formulaire

 document.getElementById('form-subscription').addEventListener('submit', function(e) {

     e.preventDefault()  // stopper l'envoi du formulaire avec la méthode preventDefault() de l'événement

    
// Instruction accès à la page message de confirmation de la soumission du formulaire réussie 

   if(isValidForm()) {

         document.querySelector('#form-confirmation-message').style.display = 'block';

         document.querySelector('#form-subscription').style.display = 'none';
    }
});

// L'événement focusout permettant de déclencher une fonction lors de la validation du champ firstName

 document.getElementById('firstName').addEventListener('focusout', function(e) {

    document.getElementById('error-firstName').innerHTML = '';
    document.getElementById('firstName').style.borderColor = 'white';

        isValidFirstname();  
      
});

// L'événement focusout permettant de déclencher une fonction lors de la validation du champ lastName

 document.getElementById('lastName').addEventListener('focusout', function(e) {

    document.getElementById('error-lastName').innerHTML = '';
    document.getElementById('lastName').style.borderColor = 'white';

         isValidLastname();
    
});

// L'événement focusout permettant de déclencher une fonction lors de la validation du champ adresse Email

 document.getElementById('email').addEventListener('focusout', function(e) {

    document.getElementById('error-email').innerHTML = '';
    document.getElementById('email').style.borderColor = 'white';
         
         isValidEmail();
 
});

// L'événement focusout permettant de déclencher une fonction lors de la validation du champ date de naissance

 document.getElementById('birthdays').addEventListener('focusout', function(e) {

    document.getElementById('error-birthdays').innerHTML = '';
    document.getElementById('birthdays').style.borderColor = 'white';
    
         isValidBirthdays();
    
});

// L'événement focusout permettant de déclencher une fonction lors de la validation du champ nombre de tournois

 document.getElementById('quantity').addEventListener('focusout', function(e) {

    document.getElementById('error-quantity').innerHTML = '';
    document.getElementById('quantity').style.borderColor = 'white';
         
         isValidTournois()
   
});

// L'événement focusout permettant de déclencher une fonction lors de la validation du champ du case à cocher

 document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {

     checkbox.addEventListener('focusout', function(e) {

        document.getElementById('error-checkbox').innerHTML = '';
        
         isValidCheckbox() 
        
    });    
});

// L'événement focusout permettant de déclencher une fonction lors de la validation du champ pays de participation

 document.querySelectorAll('input[name="country"]').forEach((country) => {

     country.addEventListener('focusout', function(e) {

        document.getElementById('error-country').innerHTML = '';
       
         isValidRadios() 
       
    });  
});




