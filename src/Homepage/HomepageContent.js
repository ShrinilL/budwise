import React from "react";
import Img from './HomepageImage';

const HomepageContent = () => {
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
            <div className="flexMid">
                {/* <img className="logo" src={Img} alt="Logo" /> */}
                    <Img />
                <div className="flexMidRight">
                    <h1 id="headingName">BudgetWise</h1>
                    {/* <!-- <h2>The one stop for budgeting</h2> --> */}
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, amet maxime consectetur velit illum optio harum similique dolorum. Facilis adipisci, tempore ea doloribus voluptatibus harum numquam at laborum modi corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ipsa fugit. Ad consequuntur illum mollitia dignissimos ea corporis explicabo voluptatibus aut! Optio aliquid nihil incidunt voluptatem quam temporibus? Quaerat, tempora!</p>
                </div>
            </div>
        </>
    )
}

export default HomepageContent;