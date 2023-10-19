let password = document.querySelector('#password')
let showPassword = document.querySelector('#show-password')
let showConfirmPassword = document.querySelector('#show-confirmPassword')
let confirmPassword = document.querySelector('#confirm-password')
let changePassword = document.querySelector('#change-password')
let danger = document.querySelector('.danger')
let informations = document.querySelector('#informations')
let inputPassword = document.querySelector('input')
let regexNum = /[0-9]/
let regexCar = /[!?-@*$]/
let regexMin = /[a-z]/
let regexMaj = /[A-Z]/

document.addEventListener('click', function (e) {
})

showPassword.addEventListener('mousedown', function () { // on écoute le bouton, c'est à dire, que va-il faire. mousedown (sert à maintenir appuyer le click pour voir le mot de passe)
    password.type = 'text' //on dit que lorsqu'on clique le mot de passe devient du texte visible
})

showPassword.addEventListener('mouseup', function () {
    password.type = 'password' //on dit que lorsqu'on relache le bouton, le mot de passe est de nouveau caché.
})

showPassword.addEventListener('mouseout', function () {
    password.type = 'password'
})



showConfirmPassword.addEventListener('mousedown', function () { //
    confirmPassword.type = 'text'
})

showConfirmPassword.addEventListener('mouseup', function () {
    confirmPassword.type = 'password'
})

showConfirmPassword.addEventListener('mouseout', function () {
    confirmPassword.type = 'password'
})



function checkPassword() { 
    let inputPassword = password.value 
    let inputConfirmPassword = confirmPassword.value

    if (inputPassword === inputConfirmPassword) { 

        informations.innerHTML = 'Le mot de passe a bien été pris en compte'
        informations.classList.remove('danger') 
        informations.classList.add('validate') 


    } else {

        informations.innerHTML = 'Les mots de passent ne sont pas identiques' 
        informations.classList.remove('validate')
        informations.classList.add('danger') 
    }
}

changePassword.addEventListener('click', function () { 
    checkPassword()
})


password.addEventListener('focus', function () { 
    informations.innerHTML = ''
})

confirmPassword.addEventListener('focus', function () {
    informations.innerHTML = ''
})

let btnSubmit = document.getElementById('envoyer')


//Retour d'info dans la page profilOk

btnSubmit.addEventListener('click', function () {
    let spanGenre = document.getElementById("genre").value
    let spanLastName = document.getElementById("lastName").value
    let spanFirstName = document.getElementById("firstName").value
    let spanNumberPhone = document.getElementById("numberPhone").value
    let spanMail = document.getElementById("mail").value

    window.location.href = `profilOk.html?genre=${spanGenre}&lastName=${spanLastName}&firstName=${spanFirstName}&numberPhone=${spanNumberPhone}&mail=${spanMail}`
})


// Sélectionnez l'élément input de type fichier
const inputElement = document.getElementById('formFile');

// Sélectionnez l'élément img pour afficher l'aperçu
const imagePreview = document.getElementById('imagePreview');

// Écoutez l'événement de changement de fichier
inputElement.addEventListener('change', function() {
  // Vérifiez si un fichier a été sélectionné
  if (inputElement.files.length > 0) {
    // Obtenez le premier fichier sélectionné
    const selectedFile = inputElement.files[0];
    
    // Créez un objet URL pour l'aperçu de l'image
    const imageUrl = URL.createObjectURL(selectedFile);
    
    // Mettez à jour la source de l'image et affichez-la
    imagePreview.src = imageUrl;
    imagePreview.style.display = 'block';
  } else {
    // Cachez l'image si aucun fichier n'est sélectionné
    imagePreview.style.display = 'none';
  }
})