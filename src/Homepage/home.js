import React from "react";
import Logo from "./LogoHome.js";
import Nav from "./nav";
import './homepage.css'
import HomepageContent from './HomepageContent.js'

const Home = () => {
    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="./Main.css" />
                <link rel="stylesheet" href="./HomepageStyle.css" />
                <title>Document</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500&family=Roboto&display=swap" rel="stylesheet" />
            </head>
            <body className="backgroundColor">
                <div className="flexboxClass">
                        <div className="flexTop">
                            {/* <img className="logoHome" src={Logo1} alt="Logo" /> */}
                            <Logo />
                            <Nav />
                        </div>
                        <HomepageContent />
                    </div>
            </body>
        </>
    )
}

export default Home;