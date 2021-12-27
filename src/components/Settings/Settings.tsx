import React, {useState} from 'react';
import classes from "./Settings.module.css"

type SettingsPropsType = {
    startValue: number
    maxValue: number
}

export const Settings = (props: SettingsPropsType) => {

    let [startValue, setStartValue] = useState<number>()
    let [maxValue, setMaxValue] = useState<number>()

    return (
        <div className={classes.settings}>
            <div className={classes.pair}>
                <div className={classes.span}><span>max value:</span></div>
                <div><input
                    type="number"
                    className={classes.input}
                    value={props.maxValue}/></div>
            </div>
            <div className={classes.pair}>
                <div className={classes.span}><span>start value:</span></div>
                <div><input
                    type="number"
                    className={classes.input}
                    value={props.startValue}
                   /></div>
            </div>
        </div>
    )
}