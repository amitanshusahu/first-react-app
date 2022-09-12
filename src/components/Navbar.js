import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav>
            <li>{props.title}</li>
            <li> home </li>
            <li> about </li>
        </nav>
    </div>
  )
}
