import React from 'react';

const Display = (props) => {
    return (
        <div className="container d-flex justify-content-between">
            <div className='first-box'>
            <ul className='list mx-2'>
                {
                    props.data.map(
                        (item,index) => {
                            return <li key={index}>{item}</li>
                        }
                    )
                }
            </ul>
        </div>
        <div className="second-box">

        </div>
        </div>
    );
}

export default Display;
