import React, { useState } from 'react';

const Calculator = () => {
    const [total, setTotal] = useState(0);
    const [expression, setExpression] = useState('');

    const handleDigitClick = (digit) => {
        if (total === '0' || total === '-0') {
            setTotal(digit);
        } else {
            setTotal(total + digit);
        }
        setExpression(expression + digit);
    }

    return (
        <div className='h-screen bg-dark flex justify-center items-center'>
            <div className='h-content w-80 bg-light-gray rounded-xl'>
                <div className='display text-6xl text-end h-1/5 p-3'>{total}</div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-plum-purple opacity-80' value='AC'>AC</button>
                    <button className='w-1/4 text-4xl p-3 bg-plum-purple opacity-80' value=''>+/-</button>
                    <button className='w-1/4 text-4xl p-3 bg-plum-purple opacity-80' value='%'>%</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80' value='/'>{'\u00F7'}</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='7' onClick={() => handleDigitClick('7')}>7</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='8' onClick={() => handleDigitClick('8')}>8</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='9' onClick={() => handleDigitClick('9')}>9</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80' value='*'>X</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='4' onClick={() => handleDigitClick('4')}>4</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='5' onClick={() => handleDigitClick('5')}>5</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='6' onClick={() => handleDigitClick('6')}>6</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80' value='-'>-</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='1' onClick={() => handleDigitClick('1')}>1</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='2' onClick={() => handleDigitClick('2')}>2</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='3' onClick={() => handleDigitClick('3')}>3</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80' value='+'>+</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/2 text-4xl p-3 bg-gray rounded-bl-xl' value='0'>0</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray' value='.'>.</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80 rounded-br-xl' value='='>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;