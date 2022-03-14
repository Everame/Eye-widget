import React from 'react';
import "./chooseItem.scss";

function chooseItem(props) {
    if(props.type === "sliderItem"){
        return (
            <a href={props.url} className={`sliderItem ${props.isSelected === true ? "check": ""}`} id='nextLink' data-value={props.value} onClick={props.next}>
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
    }else{
        return (
            <a href={props.url} className={`chooseItem`} id='nextLink' data-value={props.value} onClick={props.next}>
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