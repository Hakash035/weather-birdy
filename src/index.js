import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import Call1 from './Call1'
import Navbar1 from './Navbar1'
import Def1 from './Def1'
import './index.css'
import Card from './Card'
import openweather from './openweather'

function Main(){ 
  /*const getinfo=(ci)=>{
    return openweather.get( "https://api.openweathermap.org/data/2.5/weather?",{
      params:{
        q:ci,
        appid:'7f29205adb81c2d4c1f4b5f85784fa0d'
      }
    });
  };
  console.log(getinfo('chennai'));  
   */
   
    let user ;
    let cit = '';
    const [temp,settemp] = useState('273.15');
    const [city,setcity] = useState('');
    const [pre,setpre] = useState('');
    const [hum,sethum] = useState('')
    const getusers = async (ci) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ci}&appid=7f29205adb81c2d4c1f4b5f85784fa0d`;
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        settemp(users.main.temp);
        setcity(users.name)
        setpre(users.main.pressure);
        sethum(users.main.humidity);
    };
    const sub = (term) =>{
        user = getusers(term);
        return user
    }
  return(
  <>
    <Navbar1 sub={sub}/>
    <Def1 temp={temp} city={city} pre={pre} hum={hum}/>
    <Card/>
  </>
  )
}

ReactDOM.render(<Main/>,document.getElementById('root'))