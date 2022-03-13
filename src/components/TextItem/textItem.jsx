import React from 'react';
import "./textItem.scss";

function textItem(props) {
  return (
    <a href="" className="textItem" onClick={props.action}>
        <div className="itemContent">
            <div className="itemText">
                <p className="itemTitle">
                    {props.title}
                </p>
            </div>
        </div>
    </a>
  )
}

export default textItem;