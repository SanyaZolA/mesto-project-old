const content = document.querySelector('.content');

const popupProfile = document.querySelector('#popup__profile');  // присваивание элементов для попап профиля.
const popupAddFoto = document.querySelector('#popup__addfoto');   // присваивание элементов для попап картинок.
const popupZoom = document.querySelector('.popup__zoom');   // присваивание элементов для открытия картинки.

// //----------------------------------НАХОЖДЕНИЕ КНОПОК---------------------------------------------------------------------------
const buttonEditPopupProfile = content.querySelector('.profile__edit-button'); // открытие редактирования профиля.
const buttonOpenPopupAddFoto = content.querySelector('.profile__add-button');  // открытие добавления картинки.
const closeButtons = document.querySelectorAll('.popup__close-button');         // вешаем закрытие крестик на переменную
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
const imageZoom = popupZoom.querySelector('.popup__zoom-image');  // для зума ищем элемент картинки
const signatureZoom = popupZoom.querySelector('.popup__zoom-signature'); // для зума ищем элемент подписи
  
// //----------------------------------НАХОЖДЕНИЕ МЕСТА РАСПОЛОЖЕНИЕ ЛИСТА В HTML И ЭЛЕМЕНТ КАРТОЧКИ-------------------------------
const elementList = document.querySelector('.element__list'); // вешаем элемент списка на переменную.
const elementTemplate = document.querySelector('.element__template').content; // переменная получает данные из блока HTML template
// //----------------------------------ФУНКЦИИ-------------------------------------------------------------------------------------
function openPopup(popup) {
  popup.classList.add('popup_opened')};                        // функция для открытия.

function closePopup(popup) {
  popup.classList.remove('popup_opened')};                     // функция для открытия(многоразовая).

function openZoomPopup(evt) {                                // функция для открытия зума
  imageZoom.src = evt.target.src;                            // берет ссылку из определенного поста (кликнутого);
  imageZoom.alt = evt.target.alt;                             // берет ссылку из определенного поста (кликнутого);
  signatureZoom.textContent = evt.target.alt;                 // берет текст для зума из определенного поста (кликнутого);
  openPopup(popupZoom);                                       // и собственно открываем.
};

function openPopupPost () {                                   // открытие заполненого профиля.
  inputNameProfile.value = profileName.textContent;
  inputAboutProfile.value = profileWho.textContent;
  openPopup(popupProfile)
}

closeButtons.forEach((button) => {                           // автоматическая обработка кнопок закрытия 'крест '
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function handleAddFormSubmit(evt) {                                                  // заполненная форма встаёт в список.
  evt.preventDefault();                                                          // сброс стандартной отправки
  const newElement = createNewPost(inputNameFoto.value, inputLinkFoto.value);  // берёт то что заполнили в форме и добавляем в переменную
  elementList.prepend(newElement);                                              // новый пост идёт в начало листа.
  closePopup(popupAddFoto)                                                      // делает функцию для закрытия.
  evt.target.reset()                                                           // сбрасывает форму.
};
formAddFoto.addEventListener('submit', handleAddFormSubmit);                         // вешаем событие(закрыть) на событие 'sudmit' - отправка

// //----------------------------------ОТКРЫТИЕ ПОПАПОВ ПРОФИЛЯ И КАРТИНОК------------------------------------------------
buttonEditPopupProfile.addEventListener('click', openPopupPost);    // вешаем событие(открыть) редактирование профиля на клик мыши.
buttonOpenPopupAddFoto.addEventListener('click', () => openPopup(popupAddFoto));       // вешаем событие(открыть) добавление картинок на клик мыши.

// //----------------------------------СОХРАНЕНИЕ ИНФОРМАЦИИ ПРИ РЕДАКТИРОВАНИИ ПРОФИЛЯ--------------------------------------------
function saveProfilePopup (evt) {
  evt.preventDefault();                                          // отмена стандартной формы отправки.
  profileName.textContent = inputNameProfile.value;              // сохранение введенной информации ФИО и замена в профиле.
  profileWho.textContent = inputAboutProfile.value;              // сохранение введенной информации О СЕБЕ и замена в профиле.
  closePopup(popupProfile);      
};
formEditProfile.addEventListener('submit', saveProfilePopup);  // на форму вешаем событие(сохранить данные) при 'оптравить'.

// //----------------------------------МАССИВ КАРТИНОВ------------------------------------------------------------------------------
const initialCards = [                                         // добавляем в переменную массив картинок и названий.
  {name: 'Озеро Лофотен', 
  link: './images/ozerolofoten.avif'},
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

// //----------------------------------ФУНКЦИИ СОЗДАНИЯ СПИСКА КАРТИНОК-------------------------------------------------------------------
function createNewPost(postName, imageLink) {
  const onePost = elementTemplate.cloneNode(true);                     // копируем в переменную данные из template в HTML.
  const postImage = onePost.querySelector('.element__foto');           // ищем данные класс в template и вешаем его на переменную.
  postImage.src = imageLink;                                           // Элемент фото template получает данные из параментов функции.
  postImage.alt = postName;                                             // Элемент фото template получает данные из параментов функции.
  onePost.querySelector('.element__title').textContent = postName;                         // ищем класс и добавляем туда новый параметр                   
  onePost.querySelector('.element__like-button').addEventListener('click', (evt) => {evt.target.classList.toggle('element__like-button_active')});         // ищем класс и вешаем кнопку лайка
  onePost.querySelector('.element__trash-button').addEventListener('click', (evt) => {evt.target.closest('.element__post').remove()});   // ищем класс и вышаем кнопку удаления
  postImage.addEventListener('click', openZoomPopup);                     // вешаем возможность делать зум-зум.
  return onePost;
};

function initializeList(list) {                                     // создаётся список картинок для отображения на странице.
  list.forEach(function (item) {                                    // обход всего списка и для каждого элемента выполняется функция.
    const onePost = createNewPost(item.name, item.link);            // получает название и ссылку. Формируется пост. 6 раз
    elementList.append(onePost);                                    // каждая картинки ставится в начало листа template.
  });
};
initializeList(initialCards);    // сама инициализация предустановленных картинок. Начинается формироваться список при загрузке страницы                                                                  //Начинается
