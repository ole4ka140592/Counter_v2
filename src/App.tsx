import React, {useState} from 'react';
import logo from './logo.svg';
import classes from './App.module.css'
import {Counter} from "./components/Counter/Counter";


function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    let [number, setNumber] = useState(0)
    let [disabledInc, setDisabledInc] = useState(false)
    let [disabledReset, setDisabledReset] = useState(true)
    let [disabledSet, setDisabledSet] = useState(false)

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

    // const callBackDisabledSetButton = ()=> {
    //     if (startValue === maxValue) {
    //         setDisabledSet(true)
    //     } else if (startValue < 0) {
    //         setDisabledSet(true)
    //     } else {
    //         setDisabledSet(false)
    //     }
    // }


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
