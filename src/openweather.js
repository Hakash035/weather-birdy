import axios from 'axios'

export default axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
    
    
    headers: {
        appid : '7f29205adb81c2d4c1f4b5f85784fa0d'
        
    }
})
