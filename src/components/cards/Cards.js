import React, { useState, useEffect } from 'react'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import styles from './Cards.module.css'
import CardDetails from './CardDetails'

const Cards = ({ data, country }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (data) setLoading(false)
  }, [loading, data])

  if (loading) {
    return <CircularProgress />
  } else {
    const { confirmed, recovered, deaths, lastUpdate } = data
    return (
      <div className={styles.container}>
        <Typography
          gutterBottom
          variant='h4'
          component='h2'
          style={{ marginBottom: '1em' }}>
          {country ? country : 'Global'}
        </Typography>
        <Grid container spacing={3} justify='center'>
          <CardDetails
            className={styles.infected}
            cardTitle='Infected'
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle='Number of active cases from COVID-19.'
          />
          <CardDetails
            className={styles.recovered}
            cardTitle='Recovered'
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle='Number of recoveries from COVID-19.'
          />
          <CardDetails
            className={styles.deaths}
            cardTitle='Deaths'
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle='Number of deaths caused by COVID-19.'
          />
        </Grid>
      </div>
    )
  }
}

export default Cards
