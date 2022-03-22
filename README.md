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
