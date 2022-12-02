

// Validation du FORMULAIRE avec JAVASRIPT

  export const formData = document.querySelectorAll(".formData");

  export const isValidForm = () => {

  return isValidFirstname() && isValidLastname() && isValidBirthdays() && isValidTournois() && isValidEmail() && isValidRadios() && isValidCheckbox();

}

// Déclaration des fonctions à exporter pour rendre les champs du formulaire obligatoires sous conditions
  
  // Instruction pour champ case à cocher valider

  export const isValidCheckbox = () => {

    let checkboxx = document.querySelectorAll('input[type="checkbox"]')
    let error = document.getElementById('error-checkbox');
    let selectedCheckbox;

    for (const checkbox of checkboxx ) {

      if (checkbox.checked) {

        selectedCheckbox = checkbox.value;

        break;
      }
    }

    // Instruction d'erreur pour champ case à cocher vide

     if (!selectedCheckbox) {

       error.innerHTML = 'Vous devez accepter les termes et condition';
      

      return false

    }
     
    // retire l'erreur pour que l'utilisateur puisse entrer une nouvelle valeur

    else {
      document.getElementById('error-checkbox').innerHTML = "";
    }

    return true
}

  // Instruction pour champ radios valider

  export const isValidRadios = () => { 
  
    let radiosButtons = document.querySelectorAll('input[name="country"');
    let error = document.getElementById('error-radiosButton');
    let selectedCountry;

    for (const radiosButton of radiosButtons) {

     if (radiosButton.checked) {
         
          selectedCountry = radiosButton.value;  

        break;
      }        
    }

    // Instruction d'erreur pour champ radios vide

     if (!selectedCountry) {

       error.innerHTML = 'Vous devez selectionner un pays';
       
      return false
    }

    // retire l'erreur pour que l'utilisateur puisse entrer une nouvelle valeur

    else {
      document.getElementById('error-radiosButton').innerHTML = "";
    }

    return true
}
 
   // Instruction pour champ tournois  valider
  
  export const isValidTournois = () => {

    let quantity = document.getElementById('quantity');

    if (quantity.value.trim() === '') {

   // Instruction d'erreur pour champ tournois vide

      let  error = document.getElementById('error-quantity');
           error.innerHTML = 'Vous devez entrer votre nombre de tournois';
           error.style.color = 'red';
           quantity.style.borderColor = 'red';
           quantity.focus()
       
      return false;
    }

    // retire l'erreur pour que l'utilisateur puisse entrer une nouvelle valeur

    else {
      document.getElementById('error-quantity').innerHTML = "";
    }

    return true
}
 
   // Instruction pour champ date Birsthdays  valider

  export const isValidBirthdays = () => {

    let birthdays = document.getElementById('birthdays');

    if (birthdays.value.trim() === '') {

  // Instruction d'erreur pour champ date Birsthdays vide

      let  error = document.getElementById('error-birthdays');
           error.innerHTML = 'Vous devez entrer votre date de naissance';
           error.style.color = 'red';
           birthdays.style.borderColor = 'red';
           birthdays.focus()
      
      return false;
    }

    // retire l'erreur pour que l'utilisateur puisse entrer une nouvelle valeur

    else {
      document.getElementById('error-birthdays').innerHTML = "";
    }

    return true
}

  // Instruction pour champ adresse Email valider 

  export const isValidEmail = () => {

    let email = document.getElementById('email');

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.trim() === '') {

  // Instruction d'erreur pour champ adresse Email vide

    let  error = document.getElementById('error-email');
         error.innerHTML = 'Vous devez entrer votre email';
         error.style.color = 'red';
         email.style.borderColor = 'red';
         email.focus()
        
      return false;
    }

    // retire l'erreur pour que l'utilisateur puisse entrer une nouvelle valeur

    else {
      document.getElementById('error-email').innerHTML = "";
    }

    return true
}

  // Instruction pour champ INPUT firstName valider 

  export const isValidFirstname = () => {

    let firstName = document.getElementById('firstName');

    if (firstName.value.trim() === '') {

  //  Instruction d'erreur pour champ INPUT firstName vide

    let error = document.getElementById('error-firstName');
        error.innerHTML = 'Vous devez entrer votre prénom'; 
        error.style.color = 'red';
        firstName.style.borderColor = 'red';
        firstName.focus();

      return false;
    } 

    else if (firstName.length < 2) {

      // Instruction d'erreur pour champ firstName tailles des caractères
    
          let  error = document.getElementById('error-firstName');     
               error.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
               error.style.color = 'red';
               firstName.style.borderColor = 'red';
               firstName.focus();
               
          return false;
        }

        // retire l'erreur pour que l'utilisateur puisse entrer une nouvelle valeur

    else {
      document.getElementById('error-firstName').innerHTML = "";
    }

    return true
    
  } 

  // Instruction pour champ INPUT lastName valider 

  export const isValidLastname = () => {

    let lastName = document.getElementById('lastName');

    if (lastName.value.trim() === '') {

  //  Instruction d'erreur pour champ INPUT lastName vide

      let  error = document.getElementById('error-lastName');
           error.innerHTML = 'Vous devez entrer votre nom';
           error.style.color = 'red'; 
           lastName.style.borderColor = 'red';
           lastName.focus();
  
      return false;
      
    }

    else if (lastName.length < 2) {

  // Instruction d'erreur pour champ lastName tailles des caractères

      let  error = document.getElementById('error-lastName');
           error.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
           error.style.color = 'red';
           lastName.style.borderColor = 'red';
           lastName.focus();
   
      return false;
    }

    // retire l'erreur pour que l'utilisateur puisse entrer une nouvelle valeur

    else {
      document.getElementById('error-lastName').innerHTML = "";
    }
 
    return true
}
