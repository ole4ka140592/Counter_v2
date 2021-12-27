import React from 'react';
import classes from "./Settings.module.css"

export const Settings = () => {
    return (
        <div className={classes.settings}>
            <div className={classes.pair}>
                <span className={classes.span}>max value:</span>
                <input type="number" className={classes.input}/>
            </div>
            <div className={classes.pair}>
                <span className={classes.span}>start value:</span>
                <input type="number" className={classes.input}/>
            </div>
        </div>
    )
}