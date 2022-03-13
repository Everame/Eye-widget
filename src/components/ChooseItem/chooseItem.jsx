import React from 'react';
import "./chooseItem.scss";

function chooseItem(props) {
  return (
    <a href={props.url} className="chooseItem" id='nextLink' onClick={props.next}>
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

export default chooseItem;