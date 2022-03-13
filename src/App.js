import React, { useState } from "react";
import StartPage from "./pages/StartPage/startPage";
import FirstPage from "./pages/FirstPage/firstPage";
import SecondPage from "./pages/SecondPage/secondPage";
import ThirdPage from "./pages/ThirdPage/thirdPage";

function App(props) {

  const[page, setPage] = useState(0);
  const[chooses, setChooses] = useState([]);
  const[urls, setUrls] = useState([]);
  const[isStart, setIsStart] = useState(false);

  function reset(e){
    e.preventDefault();
    const reset = document.querySelector('.resetLink');
    const href = reset.getAttribute('href');
    window.history.pushState(null,null,href);
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
    }
    urls.push(href);
    window.history.pushState(null,null,myURL + href);
    setPage(page + 1);
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
  }

  function skip(e){
    e.preventDefault();
    urls.push("");
    setPage(page + 1);
  }


  switch (page) {
    case 0:{
      return (
        <div className="eyeWidget">
          <StartPage url={props.url} next={next}/>
        </div>
      );
    }

    case 1:{
      return (
        <div className="eyeWidget">
          <FirstPage url={props.url} next={next} prev={prev} reset={reset} skip={skip}/>
        </div>
      );
    }

    case 2:{
      return (
        <div className="eyeWidget">
          <SecondPage url={props.url} next={next} prev={prev} reset={reset} skip={skip} prevValue={chooses[0]}/>
        </div>
      );
    }

    case 3:{
      return (
        <div className="eyeWidget">
          <ThirdPage url={props.url} next={next} prev={prev} reset={reset} skip={skip}/>
        </div>
      );
    }
  
    default:{
      return (
        <div className="eyeWidget">
          <StartPage url={props.url} next={next}/>
        </div>
      );
    }
      
  }
}

export default App;
