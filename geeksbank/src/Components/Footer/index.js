import React from 'react'
import '../Footer/Footer.css';
import {Link} from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">    
                 <div className="container-fluid">
                    <span>Developer By  
                        <Link className="Footer__Link" to="/"> @Daniel Riveros</Link>
                    </span> 
                </div>
            </div>
        )
    }
}


export {Footer};
