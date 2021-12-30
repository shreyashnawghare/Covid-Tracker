import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './Card.module.css'

const CardDetails = ({
  className,
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
}) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      sm={6}
      md={3}
      className={cx(styles.card, className)}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant='h5'>
          <CountUp start={0} end={value} duration={3} separator=',' />
        </Typography>
        <Typography color='textSecondary'>
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant='body2'>{cardSubtitle}</Typography>
      </CardContent>
    </Grid>
  )
}

export default CardDetails
