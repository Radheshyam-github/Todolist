import React from 'react';

const Left = (props) => {
    return (
        <div className="container">
            <div className='first-box py-1 '>
                <ul className='list mx-2 '>
                    {
                        props.data.map(
                            (item, index) => {
                                return <li key={index} onClick={()=>
                                {
                                    props.remove(index, item)
                                }
                                }>{item}</li>
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Left;
