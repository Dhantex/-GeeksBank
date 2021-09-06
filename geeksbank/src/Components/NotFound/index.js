import React from 'react'
import '../NotFound/NotFound.css'
import ImageNotFound from '../../images/Moneynotfound.png'

function NotFound(){
        return(
            <div className="Container">
                <div className="row">
                    <div className="Container__Content  col-3">
                        <div className="Container__Content__Image col-md-1">
                            <img src={ImageNotFound}
                                alt="Imagen Logo"
                                className="Container__Content__Image"/>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export {NotFound}