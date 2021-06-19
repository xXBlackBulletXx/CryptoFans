import React from 'react'
import { Grid } from '@material-ui/core'
import useAuth from '../../hooks/useAuth'
import PropTypes from 'prop-types'
import { FacebookButton, GoogleButton } from '../SocialButton'

const AuthLogin = ({
  socialLabel = false,
  socialHorizontal = false
}) => {
  const { session } = useAuth()
  return (
    <>
      {!session && (
        <Grid container spacing={1}>
          <Grid item xs={socialHorizontal ? 12 : 'auto'}>
            <FacebookButton socialLabel={socialLabel} />
          </Grid>
          <Grid item xs={socialHorizontal ? 12 : 'auto'}>
            <GoogleButton socialLabel={socialLabel} />
          </Grid>
        </Grid>
      )}
    </>
  )
}

AuthLogin.propTypes =  {
  socialLabel: PropTypes.bool,
  socialHorizontal: PropTypes.bool
}

export default AuthLogin
