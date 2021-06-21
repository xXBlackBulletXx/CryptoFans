import { Grid, TextField } from '@material-ui/core'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const EmailAuth = () => {
  const {
    control,
  } = useForm()
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Controller
          name='email'
          control={control}
          render={({ field }) => <TextField {...field} />}
        />
        {/* <TextField
          id='email'
          name='email'
          label='Email'
          type='email'
        /> */}
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          id='password'
          name='password'
          label='Password'
          type='password'
        />
      </Grid>
    </Grid>
  )
}

export default EmailAuth
