import React,{useState} from 'react'

function Navbar1(props) {
    const [input,setinput] = useState('chennai');
    const submitfun= (e) =>{
        e.preventDefault();
        props.sub(input)
    }
    return (
        <div>
              <div id="navbar">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ed7d725080397.5604b800bb3a5.jpg" id="logo" alt=""/>
                <h1 id="head">Weather-birdy</h1>  
                <input id="search" type="text" onChange={(e)=>{setinput(e.target.value)}}/>
                <button id="subtn"  onClick={submitfun}>search</button>
                                                             
               </div>
        </div>
    )
}

export default Navbar1
