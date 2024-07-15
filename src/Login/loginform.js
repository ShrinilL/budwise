import React from "react";

const Loginform = () => {
    return (
        // <form className="formStruct" name="myForm" action="Homepage.js" onsubmit="return validateForm()" method="get">
        // <form className="formStruct" name="myForm" action={Submit()} method="get" target="blank">
        <form className="formStruct" name="myForm" action="Homepage.js" method="get" target="blank">
            <div className="parameters">
                <label className="inp" for="uname">Username:</label>
                <input className="inpBox" type="text" id="uname" name="uname" /><br /><br />
            </div>
            <div className="parameters">
                <label className="inp" for="password">Password:</label>
                <input className="inpBox" type="password" id="password" name="password" /><br /><br />
            </div>
            <input className="login" type="submit" value="Log In" />
        </form>
    )
}

export default Loginform;