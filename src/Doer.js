import React from 'react';

const Doer = ({doPls}) => {
    return (
        <div className="container text-center">
            <button onClick={doPls} type="button" class="btn btn-outline-dark">New Person</button>
        </div>
    );
}

export default Doer;