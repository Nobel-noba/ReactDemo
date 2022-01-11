import React from 'react'

function Cardz2(props: { username?: String }) {
    return (
        <>
            <div className="card  mt-2 mb-3">

                <div className="card-up aqua-gradient"></div>

                <div className="avatar mx-auto white">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.webp" className="rounded-circle img-responsive" alt="woman avatar"/>
                </div>

                <div className="card-body">
                <h4 className="card-title font-weight-bold">{props.username}</h4>
                <hr />
                <p><i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                    adipisci</p>
                </div>

            </div>
        </>
    )
}

export default Cardz2
