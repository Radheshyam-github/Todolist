import React from 'react';

const Right = (props) => {
    const items =  props.removedata.map(
            (item, index) => {
                return <li key={index} onClick={() => props.repeatfun(item, index)}>{item}</li>
            }
        )

    return (

        <div className="second-box ms-5 float-end">
            <ul className='list mx-2'>
                {items}
            </ul>

        </div>

    );
}

export default Right;
