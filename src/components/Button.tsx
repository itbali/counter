import React from 'react';
import s from  './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
    disable?:boolean
}

export const Button = (props:ButtonPropsType) => {


    let onClickHandler = ()=>{
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHandler} disabled={props.disable} className={s.button}>{props.name}</button>
        </div>
    );
};
