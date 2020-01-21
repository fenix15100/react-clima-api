import React from 'react';

const AlertError = ({errors}) => {

    return (
        <div className="row" id="alert_box">
            <div className="col s12 m12">
                <div className="card red darken-1">
                    <div className="row">
                        <div className="col s12 m10">
                            <div className="card-content white-text">
                                <ol>
                                {errors.map((error,index) => (<li key={index}>{error}</li>))} 
                                </ol>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default AlertError;