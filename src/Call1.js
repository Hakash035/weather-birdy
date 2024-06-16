import React, { useState, useEffect } from 'react'



function Call1(prop) {
    var city = prop.city



    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apikey`;
    const [users, setusers] = useState({})

    const getusers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setusers(users);
    };


    useEffect(() => { getusers(); }, [])

    return <Temperature {...users} />
}

function Temperature(props) {
    const { main, name } = props;
    const { temp, pressure, humidity } = { ...main };
    const co = ['#007bff', '#17a2b8', '#fcc107', '#dc3545', '#343a40', '#6c757d', '#88b04b', '#b565a7', '#5b5ea6', '#e15d44', '#e9897e']
    var ran = Math.floor(Math.random() * 11);
    return (
        <div style={{ borderRadius: '12px', backgroundColor: co[ran], color: 'white',margin:'5px 5px',maxWidth:'200px' }} className="card" id="card" >
            <h3 className="no" id="city">city : {name} </h3>
            <h4 id="temp" className="no" >temp: {Math.floor(temp - 273.15)} C </h4>
            <h4 className="no">pressure:{pressure}</h4>
            <h4 className="no">humidity:{humidity}</h4>
        </div>
    )

}

export default Call1
