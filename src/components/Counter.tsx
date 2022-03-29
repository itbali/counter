import React from 'react';
import s from './counter.module.css'

type CounterType = {
    error:boolean
    counter: number
}

const Counter = (props: CounterType) => {
    return (
        <div>
            <div className={props.error ? s.error : '' + s.default}>{props.counter}</div>
        </div>
    );
};

export default Counter;