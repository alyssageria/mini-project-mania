import React, { useState } from 'react';

const Calculator = () => {
    const [total, setTotal] = useState(0);

    return (
        <div className='h-screen bg-dark flex justify-center items-center'>
            <div className='h-content w-80 bg-light-gray rounded-xl'>
                <div className='text-6xl text-end h-1/5 p-3'>{total}</div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-plum-purple opacity-80'>AC</button>
                    <button className='w-1/4 text-4xl p-3 bg-plum-purple opacity-80'>+/-</button>
                    <button className='w-1/4 text-4xl p-3 bg-plum-purple opacity-80'>%</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80'>{'\u00F7'}</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>7</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>8</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>9</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80'>X</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>4</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>5</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>6</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80'>-</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>1</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>2</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>3</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80'>+</button>
                </div>
                <div className='h-1/5'>
                    <button className='w-1/2 text-4xl p-3 bg-gray rounded-bl-xl'>0</button>
                    <button className='w-1/4 text-4xl p-3 bg-gray'>.</button>
                    <button className='w-1/4 text-4xl p-3 bg-orange opacity-80 rounded-br-xl'>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;