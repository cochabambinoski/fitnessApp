// const element = document.createElement('h1')

// element.innerText = "Hey React"

// const container = document.getElementById('root')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
const container = document.getElementById('root')

// ReactDOM.render(____QUE____,_____DONDE____)

ReactDOM.render(<Card />, container)