import React, { useState } from "react";
import StartPage from "./pages/StartPage/startPage";
import FirstPage from "./pages/FirstPage/firstPage";
import SecondPage from "./pages/SecondPage/secondPage";
import ThirdPage from "./pages/ThirdPage/thirdPage";
import FourPage from "./pages/FourPage/fourPage";
import FifthPage from "./pages/FifthPage/fifthPage";
import SixthPage from "./pages/SixthPage/sixthPage";
import SeventhPage from "./pages/SeventhPage/seventhPage";
import EighthPage from "./pages/EighthPage/eighthPage";
import NinthPage from "./pages/NinthPage/ninthPage";
import TenthPage from "./pages/TenthPage/tenthPage";
import FinishPage from "./pages/FinishPage/finishPage";

//Основной компонент отвечающий за сбор информации со всех страниц и навигации по ним
function App(props) {

  const[page, setPage] = useState(0); //id начальной страницы
  const[chooses, setChooses] = useState([]); //Массив с выборами всех страниц
  const[urls, setUrls] = useState([]); //Массив с cформированными частями общего url
  const[isStart, setIsStart] = useState(false); //Состояние запуска формы
  const[animationID, setAnimationID] = useState("fadeLeft"); //Тип анимации страницы

  //Функция сброса параметров при загрузке страницы
  function onLoadReset(){
    window.history.replaceState(null,null,props.url);
    setChooses([]);
    setUrls([]);
    setPage(0);
    console.clear();
  }
  
  //Функция сброса параметров по нажатии
  function reset(e){
    e.preventDefault();
    const reset = document.querySelector('.resetLink');
    var href = "";
    if(reset !== null){
      href = reset.getAttribute('href');
    }
    window.history.replaceState(null,null,href); //Замена текущего значения URL на изначальный
    setChooses([]);
    setUrls([]);
    setPage(0);
    console.clear();
  }

  //Функция переключения экрана
  function next(e){
    e.preventDefault();
    const next = e.currentTarget;
    const value = next.getAttribute('data-value');
    var myURL = document.location; //Считывание текущего URL
    var href = "";

    //Проверка наличия значения выбора у кнопки
    if(value !== null){
      chooses.push(value); //Добавление текущего значения кнопки в массив всех выборов
      setIsStart(true); //Обновление состояния запуска формы
      href = isStart ? "&" + next.getAttribute('href') : "?" + next.getAttribute('href'); //Формирование url-части текущего значения
    }else if(next.classList.contains('disabled')){ //если кнопка в состоянии disabled
      return false;
    }
    urls.push(href); //Добавление текущей url-части в массив с cформированными частями общего url
    window.history.pushState(null,null,myURL + href); //Добавление текущей url-части к общему URL-адресу
    setPage(page + 1); //Вызов следующей страницы
    setAnimationID("fadeLeft"); //Анимация, с которой вызвать следующую страницу
  }

  //Функция возвращения предыдущего экрана
  function prev(e){
    e.preventDefault();
    //Удаление из массивов предыдущих действий
    chooses.pop();
    urls.pop();

    //Сборка полного URL из url-частей массива
    const fullUrl = urls.reduce(function(sum, current) {
      return sum + current;
    }, "");
    //Проверка на возврат на начальный экран
    if(fullUrl === ""){
      setIsStart(false);
    }
    window.history.replaceState(null,null,props.url + fullUrl); //Замена URL-адреса на предыдущий вариант
    setPage(page - 1); //Возврат к предыдущему экрану
    setAnimationID("fadeRight"); //Анимация, с которой вызвать предыдущую страницу
  }

  //Функция пропуска выбора
  function skip(e){
    e.preventDefault();
    urls.push(""); //Добавление пустого значения в массив всех выборов
    chooses.push(""); //Добавление пустого значения в массив URL-частей
    setPage(page + 1); //Вызов следующей страницы
    setAnimationID("fadeLeft"); //Анимация, с которой вызвать следующую страницу
  }

  //Функция пропуска двух страниц
  function doubleSkip(e){
    e.preventDefault();
    urls.push("");
    chooses.push("");
    setPage(page + 2);
    setAnimationID("fadeLeft");
  }

  //Функция отпраки готового URL в консоль
  function send(e){
    e.preventDefault();
    console.log("URL: " + document.location.href);
  }

  //Вызов страницы в зависимости от текущего id
  switch (page) {
    case 0:{
      return (
        <div className="eyeWidget" onLoad={onLoadReset}>
          <StartPage url={props.url} next={next} reset={reset} animation={animationID}/>
        </div>
      );
    }

    case 1:{
      return (
        <div className="eyeWidget">
          <FirstPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} animation={animationID}/>
        </div>
      );
    }

    case 2:{
      return (
        <div className="eyeWidget">
          <SecondPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} prevValue={chooses[0]} animation={animationID}/>
        </div>
      );
    }

    case 3:{
      return (
        <div className="eyeWidget">
          <ThirdPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} animation={animationID}/>
        </div>
      );
    }

    case 4:{
      return (
        <div className="eyeWidget">
          <FourPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} animation={animationID}/>
        </div>
      );
    }

    case 5:{
      return (
        <div className="eyeWidget">
          <FifthPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} prevValue={chooses[1]} animation={animationID}/>
        </div>
      );
    }

    case 6:{
      return (
        <div className="eyeWidget">
          <SixthPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} prevValue={chooses[0]} animation={animationID}/>
        </div>
      );
    }

    case 7:{
      return (
        <div className="eyeWidget">
          <SeventhPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} animation={animationID}/>
        </div>
      );
    }

    case 8:{
      return (
        <div className="eyeWidget">
          <EighthPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} animation={animationID}/>
        </div>
      );
    }

    case 9:{
      return (
        <div className="eyeWidget">
          <NinthPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} doubleSkip={doubleSkip} animation={animationID}/>
        </div>
      );
    }

    case 10:{
      return (
        <div className="eyeWidget">
          <TenthPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} animation={animationID}/>
        </div>
      );
    }

    case 11:{
      return (
        <div className="eyeWidget">
          <FinishPage url={props.url} send={send} reset={reset} animation={animationID}/>
        </div>
      );
    }
  
    default:{
      return (
        <div className="eyeWidget" onLoad={onLoadReset}>
          <StartPage url={props.url} next={next} reset={reset} animation={animationID}/>
        </div>
      );
    }
      
  }
}

export default App;
