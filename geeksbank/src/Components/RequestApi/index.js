import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { TableResult } from '../TableResult';
import Swal from 'sweetalert2'


function RequestApi({TransactionRequest}){

    const baseURL = "https://localhost:44365/api/Geeksbank";

    const [data, setData]= useState([]);

    const GetTransaction = async () => {

        await axios.get(baseURL)
        .then(response => {
          setData(response.data);
        }).catch(error => {
          console.log(`Error-GetTransaction: ${error.message}`);
        });
      }

      const PostTransaction = async () => {

        TransactionRequest.FirstNumber=parseInt(TransactionRequest.FirstNumber);
        TransactionRequest.SecondNumber=parseInt(TransactionRequest.SecondNumber);
        await axios.post(baseURL + "/FibonnaciTransaction", TransactionRequest )
        .then(response => {

            const resultJson = JSON.parse(JSON.stringify(response.data));
            if(resultJson.result === false ){
                
                console.log("Entro swal");

                Swal.fire({
                    title: 'no result found in fibonacci sequence',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            }

          setData(data.concat(response.data));
        }).catch(error => {
          console.log(`Error-PostTransaction: ${error.message}`);
        });
      }

      useEffect(() =>{
        GetTransaction();
      },[data])

 return(
    <TableResult 
        data = {data}
        PostTransaction = {PostTransaction}
    /> 
 );
}


export {RequestApi};