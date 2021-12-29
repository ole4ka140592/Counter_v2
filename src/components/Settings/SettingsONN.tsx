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

    // const disabledSetButton = () => {
    //     if (props.startValue) {
    //         if (props.startValue < 0) {
    //             props.setDisabledSet(true)
    //         } else if (props.startValue === props.maxValue) {
    //             props.setDisabledSet(true)
    //         }
    //     }
    // }

    const onChangeSTART_value = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(JSON.parse(e.currentTarget.value))

    }

    const onChangeMAX_value = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(JSON.parse(e.currentTarget.value))
    }

    let [error, setError] = useState(false)

    const settingsONN_Handler = () => {

        if (props.startValue < 0 && props.startValue > props.maxValue) {
            props.setDisabledSet(true)
            setError(true)
        } else if (props.startValue === props.maxValue) {
            props.setDisabledSet(true)
            setError(true)
        }

        localStorage.setItem("startValue", JSON.stringify(props.startValue))
        localStorage.setItem("maxValue", JSON.stringify(props.maxValue))
        let newNumberString = (localStorage.getItem("startValue"))
        if (newNumberString) {
            let newNumber = JSON.parse(newNumberString)
            props.setNumber(newNumber)
            props.setStartValue(newNumber)
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
                            className={classes.input}
                            value={props.maxValue}
                            onChange={onChangeMAX_value}


                        /></div>
                    </div>
                    <div className={classes.pair}>
                        <div className={classes.span}><span>start value:</span></div>
                        <div><input
                            type="number"
                            className={classes.input}
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