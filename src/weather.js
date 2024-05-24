import React, { useState } from "react";
import axios from "axios";
import "./styles.css"

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const[city,setCity]=useState("");

   
    const changeHandler=(e)=>{
       
        setCity(e.target.value);
        console.log(city);
        
    }

    const searchLocation=(event)=>{
           
            if(event.keyCode === 13)
                {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=804714284c890003f49b5315aad94ed0`).then(res =>{
                    console.log(res.data)
                    setWeatherData(res.data);
                    setCity("");
                } )
                    
                }   
               
            }
        
    return (
        <>
            <div className="container">
                
                <div>
                <input type="text" className="searchbox" placeholder="searchLocation"
                onChange={(e)=>changeHandler(e)}
                onKeyDown={searchLocation}
                />
                </div>
                {
                    weatherData?.name &&
                    <>
                        <div className="city">
                            {weatherData?.name}
                        </div>
                        <div className="temp">
                            {weatherData?.main?.temp}{'\u00b0'}F
                        </div>
                        <div className="main">
                            {weatherData?.weather?.[0]?.main}
                        </div>
                        <div className="flexcontainer">
                        <div className="headings">
                            <span className="child"><h3>Feels Like</h3></span>
                            
                            <span className="child"><h3>Humidity</h3></span>
                           
                            <span className="child"><h3>Wind Speed</h3></span>
                        </div>
                        <div className="parameters">
                            <span className="child1">{weatherData.main.feels_like}</span>
                            
                            <span className="child1">{weatherData.main.humidity}</span>
                           
                            <span className="child1">{weatherData.wind.speed}</span>
                        </div>
                        </div>
                       
                    </> 
                }
                
                
                
            </div>

        </>
    )
}
export default Weather