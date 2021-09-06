import React,{useState} from 'react'
import { RequestApi } from '../RequestApi'
import {Fibonacci} from '../Fibonacci'

function Home(){
    
    const [TransactionRequest, setTransactionRequest]=useState({
        FirstNumber: 0,
        SecondNumber: 0,
      });

        return(
            <React.Fragment>
                <Fibonacci 
                    setTransactionRequest = {setTransactionRequest}
                    TransactionRequest = {TransactionRequest}
                />

                <RequestApi 
                    TransactionRequest = {TransactionRequest} 
                />

            </React.Fragment>
        )
}

export {Home}