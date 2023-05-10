
import React, { useState} from 'react'
import './Calculator.css'

/* eslint no-eval: 0 */

function Calculator() {
    const [name, setName] = useState('');
    const handleClick = (value) => {
        let x = name;
        setName(x + value);
    }
  return (
    <div className="div-area">
    <div id="result-area">
        {name}
    </div>
    <table>
        <tr>
        <td onClick={() => handleClick(' ( ')}>(</td>
        <td onClick={() => handleClick(' ) ')}>)</td>
            <td onClick={() => setName(name.slice(0, name.length - 1))} className='opperator'>DEL</td>
            <td onClick={() => setName('')} className='opperator'>AC</td>
        </tr>
        <tr>
            <td onClick={() => handleClick(7)}>7</td>
            <td onClick={() => handleClick(8)}>8</td>
            <td onClick={() => handleClick(9)}>9</td>
            <td onClick={() => handleClick(' / ')} className='opperator'>÷</td>
        </tr>
        <tr>
            <td onClick={() => handleClick(4)}>4</td>
            <td onClick={() => handleClick(5)}>5</td>
            <td onClick={() => handleClick(6)}>6</td>
            <td onClick={() => handleClick(' * ')} className='opperator'>x</td>
        </tr>
        <tr>
            <td onClick={() => handleClick(3)}>3</td>
            <td onClick={() => handleClick(2)}>2</td>
            <td onClick={() => handleClick(1)}>1 </td>
            <td onClick={() => handleClick(' + ')} className='opperator'>+</td>
        </tr>
        <tr>
            <td onClick={() => handleClick(0)}>0</td>
            <td onClick={() => handleClick('.')}>,</td>
            <td onClick={() => {
                let result = eval(name).toFixed(2);
                if(result.includes(".00"))
                {
                    result = result.slice(0, result.length - 3);

                }

                setName(result);

            }} id="equals">=</td>
            <td onClick={() => handleClick(' - ')} className='opperator'>-</td>
        </tr>
    </table>
    </div>
  )
}

export default Calculator