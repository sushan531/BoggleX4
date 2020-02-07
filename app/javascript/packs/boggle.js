import React from 'react'
import ReactDOM from 'react-dom'
import Stage from "../components/Stage/Stage";
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Stage/>,
        document.body.appendChild(document.createElement('div'))
    )
})
