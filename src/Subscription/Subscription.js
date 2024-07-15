import React, { useState, useEffect } from "react";
import Logo from "../Login/Logo";
import './subscription.css';

const Subscription = () => {
    const [rows, setRows] = useState([
        {
            id: 0,
            SrNo: 1,
            Expense: "Netflix",
            Cost: 3000
        }
    ]);

    const [totalCost, setTotalCost] = useState(3000);

    const addRow = () => {
        const newRow = {
            id: rows.length,
            SrNo: rows.length + 1,
            Expense: "",
            Cost: 0
        };
        setRows(prevRows => [...prevRows, newRow]);
    };

    const removeRow = (indexToRemove) => {
        setRows(prevRows => prevRows.filter(row => row.id !== indexToRemove));
    };

    const handleChange = (e, index, field) => {
        const updatedRows = rows.map(row => {
            if (row.id === index) {
                return { ...row, [field]: e.target.value };
            }
            return row;
        });
        setRows(updatedRows);
    };    
    
    const calculateTotalCost = () => {
        let total = 0;
        rows.forEach(row => {
            total += Number(row.Cost);
        });
        setTotalCost(total);
    };

    useEffect(() => {
        calculateTotalCost();
        //Since we got a warning regarding es lint, we include the next line
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[rows]);

    return (
        <div className="backgroundColor">
            <div className="flexboxClass">
                <Logo />
                <h1 id="heading">Subscription Tracker</h1>
                <div className="modifyBudButton">
                    <button className="modifyBud" onClick={addRow}>Add +</button>
                    <button className="modifyBud">Modify</button>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="SrNo">Sr. No.</th>
                                <th className="Expense">Subscription</th>
                                <th className="Cost">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(row => (
                                <tr key={row.id}>
                                    <td className="SrNo">{row.SrNo}</td>
                                    <td className="Expense">
                                        <input className="expenseBox"
                                            type="text"
                                            value={row.Expense}
                                            onChange={(e) => handleChange(e, row.id, "Expense")}
                                        />
                                    </td>
                                    <td className="Cost">
                                        <input className="costBox"
                                            type="number"
                                            value={row.Cost}
                                            onChange={(e) => {
                                                handleChange(e, row.id, "Cost");
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <button className="remove" onClick={() => removeRow(row.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="total">Total: {totalCost}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Subscription;
