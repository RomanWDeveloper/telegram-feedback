<h1 align="center">telegram-feedback</h1>

<h2 align="left">RU</h2>
Простой скрипт для отправки формы в телеграм бота

## Содержание

-   [Файлы](#файлы)
-   [Установка](#установка)
-   [Использование](#использование)
-   [Лицензия](#лицензия)

## Файлы

-   `index.html` - демо страница для отправки формы
-   `feed.js` - файл с подготовкой данных формы и отправки на свой сервер
-   `server.php` - файл который отправляет данные в telegram api

## Установка

1.  перенесите все файлы в свой существующий проект

2.  создайте бота в телеграме https://t.me/BotFather https://api.telegram.org/bot{ваш токен}/getUpdates

3.  узнать `chat id` можно перейдя по ссылке

4.  настройте в файле `server.php` данные полученые с вашего телеграм бота, всего 3 строки

```php
$botId = ''; //id бота, можно получить при создании бота в телеграм
$token = ''; //токен бота, можно получить при создании бота в телеграм
$chatId = ''; // id чата можно получить при отправке запроса
```

### Использование

1. Можно создавать сколько угодно полей, они автоматически добавятся и будут отправлены

2. если хотите назвать форму по своему то укажите элемент формы в параметре при создании экземпляра класса

```js
const myForm = document.form.myForm;
const feed = new TgBotRV({ form: myForm });
```

3. Функционал буду обновлять :)

## Лицензия

Copyright (c) 2023 [RomanWDeveloper](https://github.com/RomanWDeveloper/)

This content is released under the [MIT License](https://opensource.org/licenses/MIT).
