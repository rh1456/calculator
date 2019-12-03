import React, { useState } from 'react'

const Button = () => {
  const [operator, setOperator] = useState([])

  const operatorUsed = val => {
    setOperator(prev => {
      return prev + val
    })
  }
  const clearFunction = () => {
    setOperator([])
  }

  const calculate = () => {
    if (operator[1] === '-') {
      setOperator(parseInt(operator[0]) - parseInt(operator[2]))
    } else if (operator[1] === '+') {
      setOperator(parseInt(operator[0]) + parseInt(operator[2]))
    } else if (operator[1] === '*') {
      setOperator(parseInt(operator[0]) * parseInt(operator[2]))
    } else if (operator[1] === '/') {
      setOperator(parseInt(operator[0]) / parseInt(operator[2]))
    }
  }

  return (
    <div className="app">
      <div className="calculator-outline">
        <div className="operator">{operator}</div>
        <div className="row">
          <button className="clear" onClick={() => clearFunction}>
            C
          </button>
        </div>
        <div className="row">
          <button className="digits" onClick={() => operatorUsed(7)}>
            7
          </button>
          <button className="digits" onClick={() => operatorUsed(8)}>
            8
          </button>
          <button className="digits" onClick={() => operatorUsed(9)}>
            9
          </button>
          <button className="mathFunction" onClick={() => operatorUsed('/')}>
            /
          </button>
        </div>
        <div className="row">
          <button className="digits" onClick={() => operatorUsed(4)}>
            4
          </button>
          <button className="digits" onClick={() => operatorUsed(5)}>
            5
          </button>
          <button button className="digits" onClick={() => operatorUsed(6)}>
            6
          </button>
          <button className="mathFunction" onClick={() => operatorUsed('*')}>
            *
          </button>
        </div>
        <div className="row">
          <button className="digits" onClick={() => operatorUsed(1)}>
            1
          </button>
          <button className="digits" onClick={() => operatorUsed(2)}>
            2
          </button>
          <button className="digits" onClick={() => operatorUsed(3)}>
            3
          </button>
          <button className="mathFunction" onClick={() => operatorUsed('+')}>
            +
          </button>
        </div>
        <div className="row">
          <button className="digits" onClick={() => operatorUsed(0)}>
            0
          </button>
          <button className="mathFunction" onClick={() => calculate()}>
            =
          </button>
          <button className="mathFunction" onClick={() => operatorUsed('-')}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Button
