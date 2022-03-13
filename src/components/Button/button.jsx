import React from 'react'

export default function Button(props) {
  return (
    <a href={props.url} className='funBtn' id={props.action} onClick={props.action === "nextLink" ? props.next: null}>
        {props.text}
    </a>
  )
}
