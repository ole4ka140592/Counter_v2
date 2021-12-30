import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from "./Settings.module.css"
import {Button} from "../Button/Button";

type SettingsONNPropsType = {
    number: number | null
    setNumber: (number: number | null) => void
    startValue: number
    maxValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    settings: boolean
    setSettings: (settings: boolean) => void
    disabledButton: boolean
    setDisabledSet: (disabledSet: boolean) => void

}

export const SettingsONN = (props: SettingsONNPropsType) => {
    let [error, setError] = useState(false)

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(props.startValue))

    }, [props.startValue])

    useEffect(() => {

        localStorage.setItem("maxValue", JSON.stringify(props.maxValue))
    }, [props.maxValue])

    const onChangeSTART_value = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = JSON.parse(e.currentTarget.value)
        props.setStartValue(newStartValue)
        if (newStartValue < 0 || newStartValue > props.maxValue) {
            setError(true)
        } else if (newStartValue === props.maxValue) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const onChangeMAX_value = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = JSON.parse(e.currentTarget.value)
        props.setMaxValue(newMaxValue)
        if (props.startValue < 0 || props.startValue > newMaxValue) {
            setError(true)
        } else if (props.startValue === newMaxValue) {
            setError(true)
        } else {
            setError(false)
        }
    }


    const settingsONN_Handler = () => {
        localStorage.setItem("maxValue", JSON.stringify(props.maxValue))
        localStorage.setItem("startValue", JSON.stringify(props.startValue))
        let newStartNumberString = (localStorage.getItem("startValue"))
        if (newStartNumberString) {
            let newStartNumber = JSON.parse(newStartNumberString)
            props.setNumber(newStartNumber)
        }
        props.setSettings(!props.settings)
    }


    return (
        <div className={classes.count}>
            <div className={classes.number}>
                <div className={classes.settings}>
                    <div className={classes.pair}>
                        <div className={classes.span}><span>max value:</span></div>
                        <div><input
                            type="number"
                            className={error ? classes.errorInput : classes.input}
                            value={props.maxValue}
                            onChange={onChangeMAX_value}


                        /></div>
                    </div>
                    <div className={classes.pair}>
                        <div className={classes.span}><span>start value:</span></div>
                        <div><input
                            type="number"
                            className={error ? classes.errorInput : classes.input}
                            value={props.startValue}
                            onChange={onChangeSTART_value}
                        /></div>
                    </div>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button name='set'
                        callBack={settingsONN_Handler}
                        disabledButton={props.disabledButton}
                        disabled={
                            props.startValue === props.maxValue
                            || props.startValue > props.maxValue
                            || props.startValue < 0}
                />
            </div>

        </div>
    )
}