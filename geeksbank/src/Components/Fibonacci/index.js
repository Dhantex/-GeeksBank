import React from 'react'
import './Fibonacci.css';


function Fibonacci({TransactionRequest,setTransactionRequest}){

    const handleChange=e=>{
        const {name, value}=e.target;
        setTransactionRequest({
          ...TransactionRequest,
          [name]: value
        });
        console.log(`handleChange: ${TransactionRequest}`);
      }


    return(
<React.Fragment>
            <h1>Geeks Bank App</h1>
            <div id="fibonacci" className="fibonacciControl">
                <label>Enter the first number</label>
                <input type="number"
                    className="form-control inputFibonacci"
                    name="FirstNumber"
                    onChange={handleChange}        
                />
                <br/>
                <label>Enter the second number</label>

                <input type="number"
                    className="form-control inputFibonacci"
                    name="SecondNumber"
                    onChange={handleChange}        
                />
                <br></br>

            </div>
        </React.Fragment>
    );
}

export {Fibonacci}


