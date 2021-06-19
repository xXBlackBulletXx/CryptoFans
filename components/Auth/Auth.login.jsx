import React from 'react'
import { Grid } from '@material-ui/core'
import useAuth from '../../hooks/useAuth'
import PropTypes from 'prop-types'
import { FacebookButton, GoogleButton } from '../SocialButton'
import EmailAuth from './EmailAuth'

const AuthLogin = ({
  socialLabel = false,
  socialHorizontal = false
}) => {
  const { session } = useAuth()
  return (
    <>
      {!session && (
        <Grid container>
          <Grid
            item
            container
            xs={12}
          >
            <Grid
              item
              xs={socialHorizontal ? 12 : 'auto'}
            >
              <FacebookButton socialLabel={socialLabel} />
            </Grid>
            <Grid
              item
              xs={socialHorizontal ? 12 : 'auto'}
            >
              <GoogleButton socialLabel={socialLabel} />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <EmailAuth />
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
