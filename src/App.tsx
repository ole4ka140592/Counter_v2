import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import classes from './App.module.css'
import {Counter} from "./components/Counter/Counter";


function App() {

    let [number, setNumber] = useState<number | null>(null)

    useEffect(() => {
        let newStartNumberString = (localStorage.getItem("startValue"))
        if (newStartNumberString) {
            let newStartNumber = JSON.parse(newStartNumberString)
            setNumber(newStartNumber)

        }
    }, [])


    return (
        <div className={classes.information}>
            <Counter
                number={number}
                setNumber={setNumber}
            />
        </div>
    )
}

export default App;
