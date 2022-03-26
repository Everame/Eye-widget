# Eye widget
 ### Виджет для конкурса Волга-IT`22
 
***Eye widget*** - это виджет, предназначенный для индивидуального подбора очков через заполнение интерактивной формы.

# Особенности виджета:

 * Подключение в любой сайт
 * Адаптивность виджета под все экраны
 * Кроссбраузерность

# Предпросмотр

<img src="/previews/mainScreen.jpg"> <img src="/previews/fourScreen.jpg"> 
<img src="/previews/sliderScreen.jpg"> <img src="/previews/finishScreen.jpg">

# Как установить виджет?

 1. Скачать ZIP-архив проекта или скачать **[release version](https://disk.yandex.ru/d/ZkiJnIdy8L1yyw)**
 2. Папку static переместить в кореневую папку сайта
 3. Подключить css и js файлы из папки static
 4. Добавить элемент html-разметки с атрибутами 'id="glasses-quiz-widget" data-source="[URL-адрес страницы, на которой размещается виджет]"' для интеграции виджета
 ```
 <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./static/css/main.6d4ad490.css">
  </head>
  <body>
    <div id="glasses-quiz-widget" data-source="http://test.ru/"></div>
  </body>
  <script src="./static/js/main.bf70cfe4.js"></script>
</html>
```
 5. Готово

# Информация для разработчиков

 ### Команд-леты:
  1. **npm start** - запуск проекта на локальном сервере
  2. **npm test** - тестирование основных функций виджета
  3. **npm run build** - сборка итогового скрипта(после сборки скрипт появится в папке build под названием static)
 
 ### Структура проекта:
  В папке **src** находится все файлы проекта, отвечающие за его работу и отрисовку
  Вся основная логика прописана в файле **App.js**, там же происходит выбор какую страницу отрисовывать
  В папке pages содеражаться все экраны, описанные в задании
  В папке **components** содеражаться все переиспользуемые компоненты экранов
  В папке **assets** все media-файлы виджета
  **media.scss** отвечает за адаптивность виджета под разные экраны
  Файлы с расширением **.test.js** содержат в себе алгоритмы для тестирования виджета 
