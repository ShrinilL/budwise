import React from "react";
import Logo from "./Signup/Logo";
import SignupForm from "./Signup/SignupForm";

const SignUp = () => {
    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="./Main.css" />
                <title>Document</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500&family=Roboto&display=swap" rel="stylesheet" />
            </head>
            <body className="backgroundColor">
                <div className="flexboxClass">
                    <Logo />
                    <h1 id="heading">BudgetWise</h1>
                    <div className="signUpBox">
                    <h2>Sign Up</h2>
                        <SignupForm />
                    </div>
                </div>
            </body>
        </>
    )
}

export default SignUp;