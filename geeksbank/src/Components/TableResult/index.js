import React from 'react'
import './TableResult.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function TableResult({data,PostTransaction}){
    return(
        <div className="App">
        <button type="button" 
                onClick={() => PostTransaction()}
                className="btn btn-success buttonFibonacci">Search Fibonacci Sequence</button>
            
        <br/>
        <table className="table table-bordered">
        <thead>
            <tr>
            <th>ID</th>
            <th>FirstNumber</th>
            <th>SecondNumber</th>
            <th>CalculationResult</th>
            </tr>
        </thead>
        <tbody>
        {data.map((UserT,i) =>(
        <tr key={i}>
            <td>{UserT.id}</td>
            <td>{UserT.firstNumber}</td>
            <td>{UserT.secondNumber}</td>
            <td>{UserT.calculationResult}</td>
            </tr>
        ))}
        </tbody>
        </table>
    </div>
    )
}

export {TableResult}