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

function App(props) {

  const[page, setPage] = useState(0);
  const[chooses, setChooses] = useState([]);
  const[urls, setUrls] = useState([]);
  const[isStart, setIsStart] = useState(false);
  const[animationID, setAnimationID] = useState("fadeLeft");

  function onLoadReset(){
    window.history.replaceState(null,null,props.url);
    setChooses([]);
    setUrls([]);
    setPage(0);
  }
  
  function reset(e){
    e.preventDefault();
    const reset = document.querySelector('.resetLink');
    var href = "";
    if(reset !== null){
      href = reset.getAttribute('href');
    }
    window.history.replaceState(null,null,href);
    setChooses([]);
    setUrls([]);
    setPage(0);
  }

  function next(e){
    e.preventDefault();
    const next = e.currentTarget;
    const value = next.getAttribute('data-value');
    var myURL = document.location;
    var href = "";
    if(value !== null){
      chooses.push(value);
      setIsStart(true);
      href = isStart ? "&" + next.getAttribute('href') : "?" + next.getAttribute('href');
    }else if(next.classList.contains('disabled')){
      return false;
    }
    urls.push(href);
    window.history.pushState(null,null,myURL + href);
    setPage(page + 1);
    setAnimationID("fadeLeft");
  }

  function prev(e){
    e.preventDefault();
    chooses.pop();
    urls.pop();
    const fullUrl = urls.reduce(function(sum, current) {
      return sum + current;
    }, "");
    if(fullUrl === ""){
      setIsStart(false);
    }
    window.history.replaceState(null,null,props.url + fullUrl);
    setPage(page - 1);
    setAnimationID("fadeRight");
  }

  function skip(e){
    e.preventDefault();
    urls.push("");
    chooses.push("");
    setPage(page + 1);
  }

  function doubleSkip(e){
    e.preventDefault();
    urls.push("");
    chooses.push("");
    setPage(page + 2);
  }

  function send(e){
    e.preventDefault();
    console.log("URL: " + document.location.href);
  }


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
