import { Grid, TextField } from '@material-ui/core'
import React from 'react'

const EmailAuth = () => {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <TextField
          id='email'
          name='email'
          label='Email'
          type='email'
        />
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
