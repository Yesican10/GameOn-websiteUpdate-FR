
 // les imports form et modal
 
 import { isValidForm, isValidFirstname, isValidLastname, isValidEmail, 

    isValidBirthdays, isValidTournois, isValidRadios, isValidCheckbox } from './form.js';

 import { launchModal, toggleModal, editNav } from './modal.js';

     const openModalBtn = document.querySelectorAll('.modal-btn');
     const closeModalBtn = document.querySelector('#js-close-modal');

 document.getElementById('menu-btn').addEventListener('click', function(e) {

         editNav();
});
    
 // launch modal event

 openModalBtn.forEach((btn) => {

     btn.addEventListener('click', launchModal);
});

 // toggle modal dysplay

 closeModalBtn.addEventListener('click', toggleModal);

 // Appeler la fonction pour vérifier les champs du formulaire

 document.getElementById('form-subscription').addEventListener('submit', function(e) {

     e.preventDefault()
    
   if(isValidForm()) {

         document.querySelector('#form-confirmation-message').style.display = 'block';

         document.querySelector('#form-subscription').style.display = 'none';
    }
});

 document.getElementById('firstName').addEventListener('focusout', function(e) {
      
         isValidFirstname();
    
});

 document.getElementById('lastName').addEventListener('focusout', function(e) {

         isValidLastname();
    
});

 document.getElementById('email').addEventListener('focusout', function(e) {
         
         isValidEmail();
 
});

 document.getElementById('birthdays').addEventListener('focusout', function(e) {
    
         isValidBirthdays();
    
});

 document.getElementById('quantity').addEventListener('focusout', function(e) {
         
         isValidTournois()
   
});

 document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {

     checkbox.addEventListener('focusout', function(e) {
        
         isValidCheckbox() 
        
    });    
});

 document.querySelectorAll('input[name="country"]').forEach((country) => {

     country.addEventListener('focusout', function(e) {

         isValidRadios() 
       
    });  
});




