const popupElement = document.querySelector('.pop-up'); 
const popupInputProfileNameElement = document.querySelector('.pop-up__input_profile_name');
const popupInputProfileJobElement = document.querySelector('.pop-up__input_profile_job'); 
const popupOpenButtonElement = document.querySelector('.profile__edit'); 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job'); 
const popupExitButtonElement = document.querySelector('.pop-up__close');
popupExitButtonElement.addEventListener('click', exitPopup); 
popupOpenButtonElement.addEventListener('click', openPopup);
document.querySelector('#input__profile_data').addEventListener('submit', editPopup); 

// !-----------------------------------------------------------------------

function openPopup() {
  popupElement.classList.add('pop-up_is-opened');
  startPopupValues();
}

function editPopup(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputProfileNameElement.value;
  profileJob.textContent = popupInputProfileJobElement.value;
  exitPopup();
}

function startPopupValues() {
  popupInputProfileNameElement.value = profileName.textContent; 
  popupInputProfileJobElement.value = profileJob.textContent; 
}

function exitPopup() {
  popupElement.classList.remove('pop-up_is-opened');
}