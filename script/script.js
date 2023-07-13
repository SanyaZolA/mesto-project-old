const content = document.querySelector('.content');

const popupProfile = document.querySelector('#popup__profile');  // присваивание элементов для попап профиля.
const popupAddFoto = document.querySelector('#popup__addfoto');   // присваивание элементов для попап картинок.
const popupZoom = document.querySelector('.popup__zoom');   // присваивание элементов для открытия картинки.

// //----------------------------------НАХОЖДЕНИЕ КНОПОК---------------------------------------------------------------------------
const buttonEditPopupProfile = content.querySelector('.profile__edit-button'); // открытие редактирования профиля.
const buttonClosePopupProfile = popupProfile.querySelector('.popup__close-button'); // закрытие редактирования профиля через крест.
const buttonOpenPopupAddFoto = content.querySelector('.profile__add-button');  // открытие добавления картинки.
const buttonClosePopupAddFoto = popupAddFoto.querySelector('.popup__close-button'); // закрытие добавления картинки черз крест.
const buttonClosePopupZoom = popupZoom.querySelector('.popup__close-button');       // закрытие зума картинки через крест.

// //----------------------------------НАХОЖДЕНИЕ ИНПУТОВ ДЛЯ ВВОДА ИНФОРМАЦИИ-----------------------------------------------------
const inputNameProfile = popupProfile.querySelector('.popup__input_type_name');  // ввод имени в попап профиля.
const inputAboutProfile = popupProfile.querySelector('.popup__input_type_about');  // ввод 'о себе' в попап профиля.
const inputNameFoto = popupAddFoto.querySelector('.popup__input_type_name');  // ввод название в попап картинок.
const inputLinkFoto = popupAddFoto.querySelector('.popup__input_type_link');  // ввод ссылки в попап картинок.

// //----------------------------------НАХОЖДЕНИЕ ПОЛЕЙ ВВОДА ДЛЯ РЕДАКТИРОВАНИЯ---------------------------------------------------
const profileName = content.querySelector('.profile__name');  // ввод имени в попап профиля.
const profileWho = content.querySelector('.profile__who');  // ввод 'о себе' в попап профиля.

// //----------------------------------НАХОЖДЕНИЕ ФОРМ ВВОДА-----------------------------------------------------------------------
const formEditProfile = popupProfile.querySelector('.popup__input-form');  // форма ввода редактирования профиля.
const formAddFoto = popupAddFoto.querySelector('.popup__input-form');  // форма ввода добавление картинок.

// //----------------------------------НАХОЖДЕНИЕ КАРТИНОК/ТЕКСТА ДЛЯ ЗУМА----------------------------------------------------------------
const imageZoom = popupZoom.querySelector('.popup__zoom-image');
const signatureZoom = popupZoom.querySelector('.popup__zoom-signature');

// //----------------------------------НАХОЖДЕНИЕ МЕСТА РАСПОЛОЖЕНИЕ ЛИСТА В HTML И ЭЛЕМЕНТ КАРТОЧКИ-------------------------------
const elementList = document.querySelector('.element__list');
const elementTemplate = document.querySelector('.element__template').content;

// //----------------------------------ФУНКЦИИ ДЛЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ПОПАПОВ-----------------------------------------------------
function openPopupProfile() {
  popupProfile.classList.add('popup_opened')};          // функция для открытия ред. профиля - добавляется класс 'popup_opened'.
  
function closePopupProfile() {
  popupProfile.classList.remove('popup_opened')};       // функция для закрытия ред. профиля - убирается класс 'popup_opened'.
  
function openPopupFoto() {
  popupAddFoto.classList.add('popup_opened')};          // функция для открытия окна 'добавление фото' - добавляется класс 'popup_opened'.
    
function closePopupFoto() {
  popupAddFoto.classList.remove('popup_opened')};       // функция для закрытия окна 'добавление фото' - убирается класс 'popup_opened'.

function closeZoomFoto() {
  popupZoom.classList.remove('popup_opened')};          // функция для закрытия окна зума - убирается класс 'popup_opened'.

function likeButton(evt) {
  evt.target.classList.toggle('element__like-button_active')};  // функция для включения/выключения лайков.

function closeNewElement(evt) {
  evt.target.closest('.element__post').remove()};               // функция для закрытия нового элемента.

function openPopup(popup) {
  popup.classList.add('popup_opened')};                        // функция для открытия(многоразовая).

function closePopup(popup) {
  popup.classList.remove('popup_opened')};                        // функция для открытия(многоразовая).

function openZoomPopup(evt) {                                // функция для открытия зума
  imageZoom.src = evt.target.src;                            // берет ссылку из определенного поста
  imageZoom.alt = evt.target.alt;                             // берет ссылку из определенного поста
  signatureZoom.textContent = evt.target.alt;                 // берет текст для зума
  openPopup(popupZoom);                                       // и собственно открывает.
};

function formAddNewFoto(evt) {                                              // заполненная форма встаёт в список.
  evt.preventDefault();                                                     // сброс отправки
  const newElement = createNewPost(inputNameFoto.value, inputLinkFoto.value);   // берёт то что заполнили
  elementList.prepend(newElement);                                              // новая фотка идёт в начало.
  closePopup(popupAddFoto)                                                      // делает функцию для закрытия.
};
formAddFoto.addEventListener('submit', formAddNewFoto);

// //----------------------------------ОТКРЫТИЕ/ЗАКРЫТИЕ ПОПАПОВ ПРОФИЛЯ И КАРТИНОК------------------------------------------------
buttonEditPopupProfile.addEventListener('click', openPopupProfile );    // вешаем событие(открыть) редактирование профиля на клик мыши.
buttonClosePopupProfile.addEventListener('click', closePopupProfile);  // вешаем событие(закрыть) редактирование профиля на клик мыши.

buttonOpenPopupAddFoto.addEventListener('click', openPopupFoto);       // вешаем событие(открыть) добавление картинок на клик мыши.
buttonClosePopupAddFoto.addEventListener('click', closePopupFoto);     // вешаем событие(закрыть) добавление картинок на клик мыши.

buttonClosePopupZoom.addEventListener('click', closeZoomFoto);         // вешаем событие(закрыть) зум на клик мыши.

// //----------------------------------СОХРАНЕНИЕ ИНФОРМАЦИИ ПРИ РЕДАКТИРОВАНИИ ПРОФИЛЯ--------------------------------------------
function saveProfilePopup (e) {
  e.preventDefault();                                          // отмена стандартной формы отправки.
  profileName.textContent = inputNameProfile.value;              // сохранение введенной информации ФИО.
  profileWho.textContent = inputAboutProfile.value;              // сохранение введенной информации О СЕБЕ.
  closePopup(popupProfile);      
};
formEditProfile.addEventListener('submit', saveProfilePopup);  // вешаем событие(закрыть) на событие 'sudmit' - отправка.

// //----------------------------------МАССИВ КАРТИНОВ------------------------------------------------------------------------------
const initialCards = [                                         // добавляем в переменную массив картинок и названий.
  {name: 'Озеро Лофотен', 
  link: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80'},
  {name: 'Нарвик', 
  link: 'https://images.unsplash.com/photo-1624704765317-8441d4141fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'},
  {name: 'Ирландия', 
  link: 'https://images.unsplash.com/photo-1569531412913-08101790fb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80'},
  {name: 'Кефалиния, Греция', 
  link: 'https://images.unsplash.com/photo-1631992339428-8ab5567b0eed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'},
  {name: 'Оберстдорф, Германия', 
  link: 'https://images.unsplash.com/photo-1688455524398-09e385936a09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},
  {name: 'Сен-Жерве-ле-Бен, Франция', 
  link: 'https://images.unsplash.com/photo-1606730004798-e77a54f5e46e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}
  ];

// //----------------------------------ФУНКЦИЯ СОЗДАНИЯ НОВОГО ПОСТА-------------------------------------------------------------------
function createNewPost(postName, imageLink) {
  const onePost = elementTemplate.cloneNode(true);                     // копируем в переменную данные.
  const postImage = onePost.querySelector('.element__foto');           // даём переменной.
  postImage.src = imageLink;                                           // переменная получает новые данные из попапа ввода.
  onePost.querySelector('.element__title').textContent = postName;      // переменная получает новые данные из попапа ввода.
  postImage.alt = postName;                                              // переменная получает новые данные из попапа ввода.
  onePost.querySelector('.element__like-button').addEventListener('click', likeButton);         // вешаем кнопку лайка
  onePost.querySelector('.element__trash-button').addEventListener('click', closeNewElement);  // вышаем кнопку удаления
  postImage.addEventListener('click', openZoomPopup);                     // вешаем возможность делать зум-зум
  return onePost;
};

function initializeList(list) {                                           // создаётся список видимый.
  list.forEach(function (item) {                                            // для каждого элемента
    const onePost = createNewPost(item.name, item.link);                    // берётся название и ссылка.
    elementList.append(onePost);                                            // выстраивается список на странице
  });
};
initializeList(initialCards);                                                 // сама инициализация.
