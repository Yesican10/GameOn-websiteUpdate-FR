
// Valider le FORMULAIRE avec JAVASRIPT


  export const formData = document.querySelectorAll(".formData");

  export const isValidForm = () => {

  return isValidFirstname() && isValidLastname() && isValidBirthdays() && isValidTournois() && isValidEmail() && isValidRadios() && isValidCheckbox();

}

// Rendre les CHAMPS du forumaire obligatoire sous conditions
  
  // Valider champ case à cocher

  export const isValidCheckbox = () => {

    let checkboxx = document.querySelectorAll('input[type="checkbox"')
    let error = document.getElementById('error-checkbox');
    let selectedCheckbox;

    for (const checkbox of checkboxx ) {

      if (checkbox.checked) {

        selectedCheckbox = checkbox.value;

        break;
      }
    }

     if (!selectedCheckbox) {

  //vérification erreur 

       error.innerHTML = 'Vous devez accepter les termes et condition';

      return false

    }
     
    return true
}

  // Valider champ radios

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

     if (!selectedCountry) {

       //vérification erreur

       error.innerHTML = 'Vous devez selectionner un pays';

      return false

    }

    return true    
}
 
  // Valider champ tournois 
  
  export const isValidTournois = () => {

    let quantity = document.getElementById('quantity');

    if (quantity.value.trim() === '') {

  // vérification erreur

      let  error = document.getElementById('error-quantity');
           error.innerHTML = 'Vous devez entrer votre nombre de tournois';
           error.style.color = 'red';
           quantity.style.borderColor = 'red';
       
      return false;
    }

    return true;
}

  // Valider champ date Birsthdays

  export const isValidBirthdays = () => {

    let birthdays = document.getElementById('birthdays');

    if (birthdays.value.trim() === '') {

 // vérification erreur

      let  error = document.getElementById('error-birthdays');
           error.innerHTML = 'Vous devez entrer votre date de naissance';
           error.style.color = 'red';
           birthdays.style.borderColor = 'red';
      
      return false;
    }

    return true;
}

  // Valider champ adresse Email

  export const isValidEmail = () => {

    let email = document.getElementById('email');

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.trim() === '') {

  //vérification erreur

    let  error = document.getElementById('error-email');
         error.innerHTML = 'Vous devez entrer votre email';
         error.style.color = 'red';
         email.style.borderColor = 'red';
        
      return false;
    }

    return true;
}

  // Validate INPUT firstName

  export const isValidFirstname = () => {

    let firstName = document.getElementById('firstName');

    if (firstName.value.trim() === '') {

  //vérification erreur

    let error = document.getElementById('error-firstName');
        error.innerHTML = 'Vous devez entrer votre prénom'; 
        error.style.color = 'red';
        firstName.style.borderColor = 'red';
      
      return false;
      
    } else if (firstName.length < 2) {

  //vérification erreur

      let  error = document.getElementById('error-firstName');     
           error.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
           error.style.color = 'red';
           firstName.style.borderColor = 'red';
      
      return false;
    }

    return true;
}

  // Validate INPUT lastName

  export const isValidLastname = () => {

    let lastName = document.getElementById('lastName');

    if (lastName.value.trim() === '') {

  //vérification erreur

      let  error = document.getElementById('error-lastName');
           error.innerHTML = 'Vous devez entrer votre nom';
           error.style.color = 'red'; 
           lastName.style.borderColor = 'red';
  
      return false;
      
    }

    else if (lastName.length < 2) {

  //vérification erreur

      let  error = document.getElementById('error-lastName');
           error.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
           error.style.color = 'red';
           lastName.style.borderColor = 'red';
      
      return false;
    }

    return true;
}
