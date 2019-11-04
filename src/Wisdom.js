import React from 'react';

const QuoteDisplayer = (props,newPerson) => {
    return (
        <div className='QuoteDisplayer container text-center'>
            <div className="row justify-content-md-center">
                <div className="col-2 align-self-start">
                  <strong>Name</strong> 
                </div>
                <div className="col-2 align-self-end">
                    {props.name}
                </div>
            </div>
            <div className="row justify-content-md-center">    
                <img src={props.image} class="img-fluid" alt="Responsive image"></img>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-4">
                    "{props.quote}"
                </div>
            </div>
        </div>
    );
}
        
export default QuoteDisplayer;
        
        
