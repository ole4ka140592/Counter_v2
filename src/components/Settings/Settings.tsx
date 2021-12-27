import React from 'react';
import classes from "./Settings.module.css"

export const Settings = () => {
    return (
        <div className={classes.settings}>
            <div className={classes.pair}>
                <div className={classes.span}><span >max value:</span></div>
                <div><input type="number" className={classes.input}/></div>
            </div>
            <div className={classes.pair}>
                <div className={classes.span}><span>start value:</span></div>
                <div><input type="number" className={classes.input}/></div>
            </div>
        </div>
    )
}