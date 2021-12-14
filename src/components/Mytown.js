import React, { Component, useEffect, useState } from "react"
import './d.css';

function Mytown() {
    const [temp, setTemp] = useState('');


    useEffect( () => 
    {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=1269843&appid=2fe63ed5acac034b1ff321779db9270d&units=metric`)
          .then(res => res.json())
          .then(
            (result) => {
                if(result.cod===200){
                    setTemp(Math.round(result.main.temp))
                }
                else 
                {
                    setTemp('')
                }
            },
            (error) => {
              console.log('Failed to fetch weather data')
              setTemp('')
            }
          )
    })


        return (
            <div align="center">
            <p><img border-radius="90px" height="300" width="200" src="city.jpg"/></p>
        Hi this is My Home-town, Hyderabad.
        <p>Hyderabad is the captial city of Telangana State</p>
        
        {temp<=10?(<img class="ig" src="cold.png"/>):(temp>10?(temp<=20?(<img class="ig" src="mild.png"/>):(<img class="ig" src="sunny.png"/>)):'')}
        {
            temp==='' ? 'Weather not available' : temp
        } &#176;C

       
            </div>
        )
    
}

export default Mytown;

