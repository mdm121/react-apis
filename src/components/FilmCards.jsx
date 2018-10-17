import React from 'react';


export default (props) => {
    return (
            <div 
            className="card m-3 align-items-center justify-content-center text-align-center" 
            style={{width: '18rem', textAlign: 'center' }}>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <h5 className="card-text" id="director">{props.director}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
    )
}