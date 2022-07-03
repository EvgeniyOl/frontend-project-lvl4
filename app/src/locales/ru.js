export default {
  translation: {
    page404: {
      pageNotFound: "Страница не найдена",
      navigate: "Но вы можете перейти ",
      mainPage: "на главную страницу",
    },
    loginPage: {
      page: {
        username: "Ваш ник",
        password: "Пароль",
        enter: "Войти",
        haveAcc: "Нет аккаунта? ",
        registration: "Регистрация",
      },
      errors: {
        usernameReq: 'Поле "Ваш ник" обязательно для заполнения!',
        passwordReq: 'Поле "Пароль" обязательно для заполнения!',
        authFailedPhrase: "Неверные имя пользователя или пароль",
      },
    },
    registrationPage: {
      page: {
        registration: "Регистрация",
        register: "Зарегистрироваться",
        username: "Имя пользователя",
        password: "Пароль",
        passwordConfirmation: "Подтвердите пароль",
      },
      errors: {
        usernameReq: 'Поле "Имя пользователя" обязательно для заполнения!',
        usernameMin: "От 3 до 20 символов",
        usernameMax: "От 3 до 20 символов",
        passwordReq: 'Поле "Пароль" обязательно для заполнения!',
        passwordMin: "Не менее 6 символов",
        passwordConfirmationReq:
          'Поле "Повторите пароль" обязательно для заполнения!',
        passwordConfirmationSame: "Пароли должны совпадать",
        regFailedPhrase: "Пользователь с таким именем уже существует",
      },
    },
    navbar: {
      exit: "Выйти",
    },
    channels: {
      channels: "Каналы",
      control: "Управление каналом",
      rename: "Переименовать",
      remove: "Удалить",
    },
    modals: {
      networkError: "Ошибка соединения",
      required: "Обязательное поле",
      alreadyExist: "Должно быть уникальным",
      add: "Добавить канал",
      addLabel: "Имя канала",
      addPlaceholder: "Введите название канала",
      addSuccess: "Канал создан",
      remove: "Удалить канал",
      removeConfirmation: "Уверены?",
      removeSuccess: "Канал удалён",
      rename: "Переименовать канал",
      renameLabel: "Имя канала",
      renamePlaceholder: "Введите новое название канала",
      renameSuccess: "Канал переименован",
      buttons: {
        cancel: "Отменить",
        send: "Отправить",
        delete: "Удалить",
      },
    },
    messages: {
      networkError: "Ошибка соединения",
      addMessageLabel: "Новое сообщение",
      addMessagePlaceholder: "Введите сообщение...",
      addButton: "Отправить",
      messages_one: "{{ count }} сообщение",
      messages_few: "{{ count }} сообщения",
      messages_many: "{{ count }} сообщений",
    },
  },
};
