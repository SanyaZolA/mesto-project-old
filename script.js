const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__input-form');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileEditButtonOpen = document.querySelector('.profile__edit-button');
const profileEditButtonClose = document.querySelector('.popup__close-button');
const profileEditButtonSave = document.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileWho = document.querySelector('.profile__who')

//----------------------ОТКРЫТИЕ ПОПАПА------------------------------
profileEditButtonOpen.addEventListener('click', openPopup);

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = '';
  inputAbout.value = '';
}
//----------------------ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ КРЕСТ------------------------------
profileEditButtonClose.addEventListener('click', closePopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}
//----------------------ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ СОХРАНИТЬ------------------------------
profileEditButtonSave.addEventListener('click', savePopup);

function savePopup(evt) {
  evt.preventDefault()
  popup.classList.remove('popup_opened');
  if (inputName.value.length != 0 && inputAbout.value.length != 0 ) { 
    profileName.textContent = `${inputName.value}`
    profileWho.textContent = `${inputAbout.value}`
    return savePopup;
  }
}