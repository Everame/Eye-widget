import React from 'react';
import "./chooseItem.scss";
import { Check } from '../../assets/icons';

function chooseItem(props) {

    //Функция отмены контекстного окна при перетягивании изображений(используется в слайдере)
    function resetContext(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    //Компонент кнопки выбора
    if(props.type === "imgTextItem"){
        //Отображение компонента в стандартном виде (картинка, текст в равных пропорциях) с оброботчиками событий и функциями для слайдера
        return (
            <a href={props.url} className={`imgTextItem ${props.isSelected === true ? "check": ""}`} id='nextLink' data-value={props.value} onClick={props.next} onTouchStart={props.touchStart} 
            onTouchEnd={props.touchEnd} onTouchMove={props.touchMove} onMouseDown={props.touchStart} onMouseMove={props.touchMove} onMouseUp={props.touchEnd} >
                <div className="itemContent" >
                    <div className="itemIcon" >
                        <img src={props.icon} alt="Icon" onContextMenu={resetContext}/>
                    </div>
                    <div className="itemText">
                        <p className="itemTitle">
                            {props.title}
                        </p>
                    </div>
                </div>
                <img src={Check} alt="Check" className="check" />
            </a>
          )
    }else if(props.type === "imgItem"){
        //Отображение компонента во второй вариации (только картинка) с оброботчиками событий и функциями для слайдера
        return (
            <a href={props.url} className={`imgItem ${props.isSelected === true ? "check": ""}`} id='nextLink' data-value={props.value} onClick={props.next} onTouchStart={props.touchStart} 
            onTouchEnd={props.touchEnd} onTouchMove={props.touchMove} onMouseDown={props.touchStart} onMouseMove={props.touchMove} onMouseUp={props.touchEnd} >
                <div className="itemContent" >
                    <div className="itemIcon" >
                        <img src={props.icon} alt="Icon" onContextMenu={resetContext}/>
                    </div>
                </div>
                <img src={Check} alt="Check" className="check" />
            </a>
          )
    }else{
        //Отображение компонента в стандартном виде (картинка, текст в равных пропорциях) с оброботчиками событий для повсеместного использования
        return (
            <a href={props.url} className={`chooseItem`} id='nextLink' data-value={props.value} onClick={props.next} data-testid={props.testID}>
                <div className="itemContent">
                    <div className="itemIcon">
                        <img src={props.icon} alt="Icon" />
                    </div>
                    <div className="itemText">
                        <p className="itemTitle">
                            {props.title}
                        </p>
                    </div>
                </div>
            </a>
          )
    }

}

export default chooseItem;