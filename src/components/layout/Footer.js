import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const textStyle = {color:'black', fontSize:'12px'}
        const containerStyle = { width:'100%', position:'absolute' }

        return (
            <div style = { containerStyle }>
                <p className = "text-center" style = { textStyle }>2022 Max Sealey</p>
            </div>
        )
    }
}