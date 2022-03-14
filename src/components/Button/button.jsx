import React from 'react'

export default function Button(props) {
    return (
      <a href={props.url} className='funBtn' id={"nextLink"} onClick={props.next}>
          {props.text}
      </a>
    )
}
