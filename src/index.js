import React from "react"
import ReactDOM from "react-dom"
import CounterApp from "./components/CounterApp"
import PrimeraApp from "./components/PrimeraApp"

import './index.css'

const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value={5} />, divRoot)
// ReactDOM.render(<PrimeraApp saludo='Luis' />, divRoot)