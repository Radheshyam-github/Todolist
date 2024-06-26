import React, {useRef} from 'react';

const Input = (props) => {
    const inpRef=useRef();
    function clickhandler() {
        const data=inpRef.current.value;
        inpRef.current.value="";
        props.itemhandler(data);
    }
    return (
        <div className='row'>
            <div className="col col-10">
            <input type="text" className='form-control mt-4 border border-primary ' ref={inpRef}/>
            </div>
            <div className="col">
                <button className='btn btn-primary mt-4' onClick={clickhandler}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Input;
