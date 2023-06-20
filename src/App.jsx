import { useReducer, useState } from 'react'
import './App.css'
import Button from './Button';
import * as math from 'mathjs';

function App() {

    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const handleText = (value) => {
        setText((text) => [...text, value + " "]);
    } 

    const handleResult = () => {
      const input = text.join("");
      setResult(math.evaluate(input));
    }

    const reload = () => {
      setText("");
      setResult("");
    }
  
    return (
        <div className='calculator-grid'>
          <div className='output'>
            <div className='pre-operand'>{text}</div>
            <div className='cur-operand'>{result}</div>
          </div>
          <Button btn='span-three btn' variable="DEL" handler={reload}>DEL</Button>
          <Button btn="btn" variable="/" handler={handleText}>/</Button>
          <Button btn="btn" variable="1" handler={handleText}>1</Button>
          <Button btn="btn" variable="2" handler={handleText}>2</Button>
          <Button btn="btn" variable="3" handler={handleText}>3</Button>
          <Button btn="btn" variable="*" handler={handleText}>*</Button>
          <Button btn="btn" variable="4" handler={handleText}>4</Button>
          <Button btn="btn" variable="5" handler={handleText}>5</Button>
          <Button btn="btn" variable="6" handler={handleText}>6</Button>
          <Button btn="btn" variable="+" handler={handleText}>+</Button>
          <Button btn="btn" variable="7" handler={handleText}>7</Button>
          <Button btn="btn" variable="8" handler={handleText}>8</Button>
          <Button btn="btn" variable="9" handler={handleText}>9</Button>
          <Button btn="btn" variable="-" handler={handleText}>-</Button>
          <Button btn="btn" variable="." handler={handleText}>.</Button>
          <Button btn="btn" variable="0" handler={handleText}>0</Button>
          <Button btn='span-two btn' variable="=" handler={handleResult}>=</Button>
        </div>
    )
}

export default App
