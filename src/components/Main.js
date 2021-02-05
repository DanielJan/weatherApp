import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

import Header from './Header'
import Content from './Content'
import WeatherSearch from './WeatherSearch'
import WeatherData from './WeatherData'
import Context from '../Context'
import Error from './Error'
import DateTime from './DateTime'
import Tagline from './Tagline'
import Footer from './Footer'

const Main = () => {
  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const [error, setError] = useState()

  // useEffect(()=>{
  //   console.log('useEffect')
  // }, [city])

  const api_call = async e => {
    e.preventDefault()
    const location = e.target.elements.location.value
    if (!location) return setError('Please enter the name of the city'), setWeather(null)

    const API_KEY = '087f238f81641b38d745530d271b0424'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    const request = axios.get(url)
    const response = await request
    
    setWeather(response.data.main)
    setCity(response.data.name)
    setError(null)
  }
  const abc = useMemo(() => {
    console.log('memo w main')
    return weather && <WeatherData />
  }, [city])
  return (
    <div className='main'>
      <Header />
      <Content>
        <DateTime />
        <Tagline />
        <Context.Provider value={{ api_call, weather, city, error }}>
          <WeatherSearch />
          {abc}
          {error && <Error error={error}></Error>}

        </Context.Provider>
        <Footer />
      </Content>
    </div>
  )
}

export default Main 