const popupContainer = document.querySelector('.pop-up__container');  // Форма
const FormBackgroundColor = document.querySelector('.pop-up'); // затемнение фона при открытии 
const nameInput = popupContainer.querySelector('.pop-up__name'); // Новое значение
const jobInput = popupContainer.querySelector('.pop-up__job'); // Новое значение
const save = popupContainer.querySelector('.pop-up__save'); // сохранить изменения
const profileEdit = document.querySelector('.profile__edit'); // Изменить данные профиля
const nameProfile = document.querySelector('.profile__name'); // Текущее значение
const jobProfile = document.querySelector('.profile__job'); // Текущее значение
const exitForm = document.querySelector('.pop-up__close');
const elementLike = document.querySelector('.elements').querySelectorAll('.element__like');
//elementLike.forEach((el) => el.classList.remove("element__like_active")); // сбрасываем лайк
FormBackgroundColor.classList.remove('pop-up'); // снимаем затемнение страницы 
startPopupValues();
exitForm.addEventListener('click', exitPopup); // закрытие по кнопке крестик 
profileEdit.addEventListener('click', openPopup); // открываем форму редактирования
popupContainer.addEventListener('submit', editPopup); // редактируем профиль
document.addEventListener('mousedown', closeOnClickOutside) // закрытие по клику в пустое место (вне формы), исключаем случай если лкм была нажата в поле формы а отпущена уже не него
document.addEventListener('keydown', closeOnClickEsc); // закрытие по кнопке ескейп
elementLike.forEach(el => el.addEventListener('click', () => elementLikeActive(el)));
// !-----------------------------------------------------------------------

function openPopup() {
  startPopupValues();
  FormBackgroundColor.classList.add('pop-up');
  popupContainer.classList.remove('pop-up__container_active');
}

function editPopup(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupContainer.classList.add('pop-up__container_active');
  FormBackgroundColor.classList.remove('pop-up');
}

function closeOnClickOutside(e) {
  if ( (e.target.className != 'pop-up__container') &&  (e.target.className != 'pop-up__name') && (e.target.className != 'pop-up__job') && (e.target.className != 'pop-up__header') && !( popupContainer.classList.contains('pop-up__container_active')) && (e.target.className != 'pop-up__save')) {
    popupContainer.classList.add('pop-up__container_active');
    FormBackgroundColor.classList.remove('pop-up');
  }
}

function closeOnClickEsc(e) {
  if (e.which === 27) {
    popupContainer.classList.add('pop-up__container_active');
    FormBackgroundColor.classList.remove('pop-up');
  }
}

function startPopupValues() {
  nameInput.value = nameProfile.textContent; 
  jobInput.value = jobProfile.textContent; 
}

function exitPopup() {
  popupContainer.classList.add('pop-up__container_active');
  FormBackgroundColor.classList.remove('pop-up');
}

function elementLikeActive(el) {
  el.classList.toggle('element__like_active')
}