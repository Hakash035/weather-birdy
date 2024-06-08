import React,{useState,useEffect} from 'react'
import { render } from 'react-dom';
import Call1 from './Call1'



function Def(props) {
                   navigator.geolocation.getCurrentPosition(position=>{
                             var h1 = document.createElement('h1');
                             var h2 = document.createElement('h1');
                             h1.innerText = position.coords.longitude;
                             h2.innerText = position.coords.latitude;
                             document.getElementById('root').append(h1);
                             document.getElementById('root').append(h2);
                             h1.setAttribute("id","ele");
                             h2.setAttribute('id','ele1')
                          
                            }) 
                    const [i,seti] = useState('80');
                    const [j,setj] = useState('60');
                    const [url,seturl] = useState('');
                    useEffect(()=>{
                      seti(document.getElementById('ele').innerText);
                      setj(document.getElementById('ele1').innerText);
                      seturl(`https://api.openweathermap.org/data/2.5/weather?lat=${j}&lon=${i}&appid=7f29205adb81c2d4c1f4b5f85784fa0d`);
                    })     
                   console.log(i,j,url);         
                  /*const url = `https://api.openweathermap.org/data/2.5/weather?lat=${j}&lon=${i}&appid=7f29205adb81c2d4c1f4b5f85784fa0d`;*/
                  const [users,setusers] = useState({});
                   const getusers = async () => {
                         const response = await fetch(url);
                        const users = await response.json();
                        setusers(users);
                    }; 
                    
                    useEffect(() => { getusers(); }, [])
                    return <>                           
                        <div id="defm">
                          <div id="def">
                            <h3>weather</h3>
                            <h5>-the state of the atmosphere with respect to wind, temperature, cloudiness, moisture, pressure, etc.</h5>
                          </div>
                        
                            <Temperature {...users} id="urcard" />             
                        </div>
    </>
     
             
 }  
function Temperature(props) {
    const { main, name } = props;
    const { temp, pressure, humidity } = { ...main };
    const co = ['#007bff', '#17a2b8', '#fcc107', '#dc3545', '#343a40', '#6c757d', '#88b04b', '#b565a7', '#5b5ea6', '#e15d44', '#e9897e']
    var ran = Math.floor(Math.random() * 11);
    return (
        <div style={{ borderRadius: '12px', backgroundColor: co[ran], color: 'white' }} className="card" >
            <h4 className="noc">Your weather</h4>
            <h4 id="temp" className="noc" >temp: {Math.floor(temp - 273.15)} C </h4>
            <h4 className="noc">pressure:{pressure}</h4>
            <h4 className="noc">humidity:{humidity}</h4>
        </div>
    )

}

export default Def
