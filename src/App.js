import React, { useState } from "react";
import StartPage from "./pages/StartPage/startPage";
import FirstPage from "./pages/FirstPage/firstPage";

function App(props) {

  const[page, setPage] = useState(0);

  function reset(e){
    e.preventDefault();
    const reset = document.querySelector('.resetLink');
    const href = reset.getAttribute('href');
    window.history.pushState(null,null,href);
    setPage(0);
  }

  function next(e){
    e.preventDefault();
    const next = document.getElementById('nextLink');
    const href = next.getAttribute('href');
    window.history.pushState(null,null,href);
    setPage(page + 1);
  }

  function prev(e){
    e.preventDefault();
    const prev = document.querySelector('.prevLink');
    const href = prev.getAttribute('href');
    window.history.pushState(null,null,href);
    setPage(page - 1);
  }

  function skip(e){
    e.preventDefault();
    const skip = document.querySelector('skipLink');
    const href = skip.getAttribute('href');
    window.history.pushState(null,null,href);
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
