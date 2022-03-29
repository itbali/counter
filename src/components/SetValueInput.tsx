import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputType = {
    title: number
    callback: (title:number) => void
    minNumber?:number
}


export const SetValueInput = (props:InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(Number(e.currentTarget.value))
    }


    return (

            <input className={s.input} type="number" value={props.title} onChange={onChangeHandler} min={props.minNumber}/>

    );
};