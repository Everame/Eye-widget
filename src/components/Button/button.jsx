import React from 'react'

export default function Button(props) {
    return (
      <a href={props.url} className={`funBtn ${props.isDisabled === true ?  "disabled": ""}`} id={"nextLink"} data-value={props.value !== null ? props.value : null } onClick={props.next}>
          {props.text}
      </a>
    )
}
