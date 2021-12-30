import React, { useEffect, useState } from 'react'
import Cards from './components/cards/Cards'
import Chart from './components/chart/Chart'
import CountryPicker from './components/countries/CountryPicker'
import { fetchData } from './api'
import Image from './image.png'
import styles from './App.module.css'

function App() {
  const [data, setData] = useState(null)
  const [country, setCountry] = useState('')

  useEffect(() => {
    const getCovidData = async () => {
      const covidData = await fetchData()
      setData(covidData)
    }
    if (!data) getCovidData()
  }, [data])

  const handleCountryChange = async (selected) => {
    const dataCountry = await fetchData(selected)
    setData(dataCountry)
    setCountry(selected)
  }

  return (
    <div className={styles.container}>
      <img src={Image} alt='COVID-19' className={styles.image} />
      <Cards data={data} country={country} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  )
}

export default App
