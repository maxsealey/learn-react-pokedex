import React from 'react';
import './Pokemon.css';

export default class Pokemon extends React.Component {
    render(){
        return (
            <div className = "col-md-3 col-sm-6 mb-5">
                <div className = "card">
                    <div className = "card-header">
                        <h6>Name</h6>
                    </div>
                </div>
            </div>
        )
    }
}