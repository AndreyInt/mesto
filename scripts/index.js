const popupContainerElement = document.querySelector('.pop-up__container');  
const popupElement = document.querySelector('.pop-up'); 
const popupNameInputElement = popupContainerElement.querySelector('.profile__name_input');
const popupJobInputElement = popupContainerElement.querySelector('.profile__job_input'); 
const popupOpenButtonElement = document.querySelector('.profile__edit'); 
const profileName = document.querySelector('.profile__name'); 
const profileJob = document.querySelector('.profile__job'); 
const popupExitButtonElement = document.querySelector('.pop-up__close');
popupExitButtonElement.addEventListener('click', exitPopup); 
popupOpenButtonElement.addEventListener('click', openPopup);
popupContainerElement.addEventListener('submit', editPopup); 

// !-----------------------------------------------------------------------

function openPopup() {
  popupElement.classList.add('pop-up_is-opened');
  startPopupValues();
}

function editPopup(evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInputElement.value;
  profileJob.textContent = popupJobInputElement.value;
  popupElement.classList.remove('pop-up_is-opened');
}

function startPopupValues() {
  popupNameInputElement.value = profileName.textContent; 
  popupJobInputElement.value = profileJob.textContent; 
}

function exitPopup() {
  popupElement.classList.remove('pop-up_is-opened');
}