import React, {useState} from 'react';
import logo from './logo.svg';
import classes from './App.module.css'
import {Counter} from "./components/Counter/Counter";


function App() {

    let startValue = 0
    let maxValue = 5

    let [number, setNumber] = useState(0)
    let [disabledInc, setDisabledInc] = useState(false)
    let [disabledReset, setDisabledReset] = useState(true)

    const callBackHandlerIncrement = () => {
        if (number < maxValue) {
            setNumber(number + 1)
            setDisabledReset(false)
        } else if (number === maxValue) {
            setDisabledInc(true)
        }
    }

    const callBackHandlerReset = () => {
        if (number === maxValue) {
            setNumber(startValue)
            setDisabledReset(true)
            setDisabledInc(false)
        } else if (number === startValue) {
            setDisabledReset(true)
            setDisabledInc(false)
        } else {
            setNumber(number - 1)
        }
    }


    return (
        <div className={classes.information}>
            <Counter
                number={number}
                callBackHandlerIncrement={callBackHandlerIncrement}
                callBackHandlerReset={callBackHandlerReset}
                startValue={startValue}
                maxValue={maxValue}

                // disabledInc={disabledInc}
                // disabledReset={disabledReset}
            />
        </div>
    )
}

export default App;
