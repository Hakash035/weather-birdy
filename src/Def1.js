import React from 'react'
import Call1 from './Call1'
function Def1(props) {
    const co = ['#007bff', '#17a2b8', '#fcc107', '#dc3545', '#343a40', '#6c757d', '#88b04b', '#b565a7', '#5b5ea6', '#e15d44', '#e9897e']
    var ran = Math.floor(Math.random() * 11);
    return (
        <div>
            <div id="defm">
                          <div id="def">
                            <h3>weather</h3>
                            <h5>-the state of the atmosphere with respect to wind, temperature, cloudiness, moisture, pressure, etc.</h5>
                            
                          </div>
                          <div id = "uca" style={{backgroundColor:co[ran],borderRadius:'12px',padding:'10px',minWidth:'100px'}}>
                                <h3>city:{props.city}</h3>
                                <h4>temp:{Math.floor(props.temp-273.15)}C</h4>
                                <h4>pressure:{props.pre}</h4>
                                <h4>humidity:{props.hum}</h4>

                            </div>
             </div>             
        </div>
    )
    
}

export default Def1
