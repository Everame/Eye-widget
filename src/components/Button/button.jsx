import React from 'react'

//Компонент всех кнопок глобального действия в проекте
export default function Button(props) {
    return (
      <a href={props.url} className={`funBtn ${props.isDisabled === true ?  "disabled": ""}`} id={"nextLink"} data-value={props.value !== null ? props.value : null } onClick={props.next} data-testid={props.testID}>
          {props.text}
      </a>
    )
}
