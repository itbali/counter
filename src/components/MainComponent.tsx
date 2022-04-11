import React, {useEffect, useState} from 'react';
import s from './style.module.css'
import {Button} from "./Button";
import {SetValueInput} from "./SetValueInput";
import Counter from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {rootStoreType} from "../redux/store";
import { decreaseCounter, increaseCounter, setCounter, setMax, setMin} from "../redux/counterReducer";

function MainComponent() {
    const counter = useSelector<rootStoreType, number>(store => store.counter.counter)
    const maxValue = useSelector<rootStoreType, number>(store => store.counter.maxValue)
    const minValue = useSelector<rootStoreType, number>(store => store.counter.minValue)

    const dispatch = useDispatch()

    const [error, setError] = useState(false) // стейт для проверки



    useEffect(() => {
        (counter < maxValue && counter > minValue) ? setError(false) : setError(true)
        console.log('counter: '+ counter,'min: ' + minValue,'max: ' + maxValue)
    }, [counter])

    function IncreaseNumber() {
        if (counter < maxValue) {
            dispatch(increaseCounter())
        }
    }

    function DecreaseNumber() {
        if (counter !== minValue) {
            dispatch(decreaseCounter())
        }
    }

    function SetMaxValue(n: number) {
        if (n + 1 > maxValue) {
            dispatch(setMax(n))
        }
        console.log(maxValue)
    }

    function SetMinValue(n: number) {

        if (n - 1 < maxValue) {
            dispatch(setMin(n))
           dispatch(setCounter(n))
        }


        console.log(minValue)
    }


    const ResetNumber = () => {

        dispatch(setCounter(minValue));
        setError(false)
    }

    return (
        <>
            <div className={s.style}>

                {/*прокидываем стейт для инпута*/}


                Counter

                {/*рисуем цифры и берем стили в зависимости от стейта эрор*/}
                <Counter counter={counter} error={error}/>
                {/*<div className={error ? s.error : '' + s.default}>{counter}</div>*/}

                {/*рисуем кнопки*/}
                <div className={s.flex}>
                    <Button
                        name={'inc'}
                        callback={IncreaseNumber}
                        disable={counter >= maxValue}
                    />
                    <Button
                        name={'res'}
                        callback={ResetNumber}
                        disable={counter === minValue}
                    /> <Button
                    name={'dec'}
                    callback={DecreaseNumber}
                    disable={counter === minValue}
                />
                </div>
            </div>

            <div className={s.style}>
                <div className={s.settingCounter}>
                    <span className={s.settingCounterSpan}> Enter max</span>
                    <SetValueInput title={maxValue} callback={SetMaxValue} minNumber={0}/>
                </div>
                <div className={s.settingCounter}>
                    <span className={s.settingCounterSpan}> Enter min</span>
                    <SetValueInput title={minValue} callback={SetMinValue} minNumber={0}/>
                </div>

            </div>
        </>

    );

}

export default MainComponent;
