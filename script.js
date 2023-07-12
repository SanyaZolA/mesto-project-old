const popupProfile = document.querySelector('.popup__profile');
const popupAddFoto = document.querySelector('.popup__addfoto');
const formElement = document.querySelector('.popup__input-form');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const profileEditButtonOpen = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('section.popup__profile .popup__close-button');
const closeFotoButton = document.querySelector('section.popup__addfoto .popup__close-button');
const saveProfileButton = document.querySelector('section.popup__profile .popup__save-button');
const saveFotoButton = document.querySelector('section.popup__addfoto .popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileWho = document.querySelector('.profile__who')
const fotoAdd = document.querySelector('.profile__add-button');

//----------------------ОТКРЫТИЕ ПОПАПА (ПРОФИЛЬ)------------------------------
profileEditButtonOpen.addEventListener('click', openPopup);

function openPopup() {
  popupProfile.classList.add('popup_opened');
  inputName.value = '';
  inputAbout.value = '';
}
//----------------------ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ КРЕСТ (ПРОФИЛЬ)------------------------------
closeProfileButton.addEventListener('click', closePopupProfile);

function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
}
//----------------------ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ СОХРАНИТЬ И СОХРАНЕНИЕ ИНФОРМАЦИИ------------------------------
saveProfileButton.addEventListener('click', saveProfilePopup);

function saveProfilePopup(evt) {
  evt.preventDefault()
  popupProfile.classList.remove('popup_opened');
  if (inputName.value.length != 0 && inputAbout.value.length == 0) { 
    profileName.textContent = `${inputName.value}`
  } else if (inputName.value.length == 0 && inputAbout.value.length != 0) { 
    profileWho.textContent = `${inputAbout.value}`
  } else if (inputName.value.length != 0 && inputAbout.value.length != 0) { 
    profileName.textContent = `${inputName.value}`
    profileWho.textContent = `${inputAbout.value}`
 }
}

//----------------------ОТКРЫТИЕ ПОПАПА (добавление картинок)------------------------------
fotoAdd.addEventListener('click', openAddFoto);

function openAddFoto() {
  popupAddFoto.classList.add('popup_opened');
}

//----------------------ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ КРЕСТ (добавление картинок)------------------------------
closeFotoButton.addEventListener('click', closePopupAddFoto);

function closePopupAddFoto() {
  popupAddFoto.classList.remove('popup_opened');
}

//----------------------ЗАКРЫТИЕ ПОПАПА ЧЕРЕЗ СОЗДАТЬ (добавление картинок)------------------------------
saveFotoButton.addEventListener('click', saveFotoPopup);

function saveFotoPopup(evt) {
  evt.preventDefault()
  popupAddFoto.classList.remove('popup_opened');
}