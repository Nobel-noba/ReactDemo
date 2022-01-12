import { Container } from '@mui/material'
import React from 'react'

function Techs() {
    return (
        <>

            <Container> 
            <div className="card testimonial-card">

                <div className="card-up indigo lighten-1"></div>

                <div className="avatar mx-auto white">
                    <img src={require('../asset/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png')} alt="" width={200}/>
                    <img src={require('../asset/1200px-Laravel.png')} alt="" width={200}/>
                    <img src={require('../asset/Cross-Page-postback-in-ASP.NET_.png')} alt="" width={200}/>
                    <img src={require('../asset/download (1).png')} alt="" width={200}/>
                </div>

                <div className="card-body">
                    <h4 className="card-title">This are the technologies we use</h4>
                    <hr />
                    <p>
                    </p>
                </div>
            </div>

            </Container>
        </>
    )
}

export default Techs
