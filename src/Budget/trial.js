import React from "react";
import Logo from "../Login/Logo";
import './budgetStyle.css';

const Budget = () => {
    return (
        <>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./Main.css" />
            <title>Document</title>
            <script src="./LoginScript.js" defer></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500&family=Roboto&display=swap" rel="stylesheet" />
        </head>
        <body className="backgroundColor">
            <div className="flexboxClass">
                <Logo />
                <h1 id="heading">Budget</h1>
                <div className="modifyBudButton">
                    <button className="modifyBud">Add +</button>
                    <button className="modifyBud">Remove -</button>
                    <button className="modifyBud">Modify</button>
                </div>

                <div className="table">
                    <table>
                        <tr>
                            <th className="SrNo">Sr. No.</th>
                            <th className="Expense">Expense</th>
                            <th className="Cost">Cost</th>
                            <th className="Category">Category</th>
                        </tr>
                        <tr>
                            <td className="SrNo">1</td>
                            <td className="Expense">Groceries</td>
                            <td className="Cost">3000</td>
                            <td className="Category">Home</td>
                        </tr>                        
                    </table>
                </div>
                
            </div>
        </body>
        </>
        
    )
}

export default Budget;