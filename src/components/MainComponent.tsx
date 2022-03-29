import React, {useState} from 'react';
import s from './style.module.css'
import {Button} from "./Button";
import {SetValueInput} from "./SetValueInput";
import Counter from "./Counter";

function MainComponent() {
    const [counter, setCounter] = useState(0)  // сам счетчик, который отображается в окне
    const [error, setError] = useState(false) // стейт для проверки

    const [value, setValue] = useState([0, 5])  // стейт для ограничения максимального числа

    const MaxValue = value[1];     // закидываем в максимальное число то, что получили в инпуте
    const MinValue = value[0];
    const StartValue = value[0] // начинаем с 0


    //логика проверки ошибки (какого хрена работает с -1)???
    function ErrorCheck(n: number, newCount:number) {
        newCount < n ? setError(false) : setError(true)
    }

    // логика увеличения числа
    function IncreaseNumber() {
        if (counter !== MaxValue) {
            console.log(counter)
            let newCount = counter+1
            setCounter(newCount);
            ErrorCheck(MaxValue, newCount) //впихиваем проверку на ошибку
        }

        console.log(counter)
    }

    function DecreaseNumber() {
        if (counter !== MinValue) {

            let newCount = counter-1
            setCounter(newCount);
            ErrorCheck(MaxValue,newCount) //впихиваем проверку на ошибку
        }
    }

    function SetMaxValue(n: number) {
        if (n+1 > value[0]) {
            value[1] = n
            setValue([...value])
        }
        ErrorCheck(n,counter)
        console.log(value[1])
    }

    function SetMinValue(n: number) {

        if (n-1 < value[1]) {
            value[0] = n
            setValue([...value])
            ErrorCheck(value[1],n)
            setCounter(n);
        }


        console.log(value[0])
    }


    // логика сброса
    const ResetNumber = () => {
        setCounter(StartValue);
        setError(false)
    }

    // отрисовка
    return (
        <>
            <div className={s.style}>

                {/*прокидываем стейт для инпута*/}


                Counter

                {/*рисуем цифры и берем стили в зависимости от стейта эрор*/}
                <Counter counter={counter} error={error}/>
                {/*<div className={error ? s.error : '' + s.default}>{counter}</div>*/}

                {/*рисуем кнопи*/}
                <div className={s.flex}>
                    <Button
                        name={'inc'}
                        callback={IncreaseNumber}
                        disable={counter >= MaxValue}
                    />
                    <Button
                        name={'res'}
                        callback={ResetNumber}
                        disable={counter === StartValue}
                    /> <Button
                    name={'dec'}
                    callback={DecreaseNumber}
                    disable={counter === StartValue}
                />
                </div>
            </div>

            <div className={s.style}>
                <div className={s.settingCounter}>
                    <span className={s.settingCounterSpan}> Enter max</span>
                    <SetValueInput title={value[1]} callback={SetMaxValue} minNumber={0}/>
                </div>
                <div className={s.settingCounter}>
                    <span className={s.settingCounterSpan}> Enter min</span>
                    <SetValueInput title={value[0]} callback={SetMinValue} minNumber={0}/>
                </div>

            </div>
        </>

    );

}

export default MainComponent;
