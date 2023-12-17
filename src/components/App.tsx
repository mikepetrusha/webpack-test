import React from "react";
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return <div>
        {/*<h1>Platform: {__PLATFORM__}</h1>*/}
        <Link to={'./about'}>About </Link>
        <Link to={'./shop'}>shop</Link>
        hello
    <button className={classes.button}>Test button</button>
    <Outlet />
    </div>
}