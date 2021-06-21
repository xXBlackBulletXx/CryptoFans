import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import useAuth from '../../hooks/useAuth'
import PropTypes from 'prop-types'
import { FacebookButton, GoogleButton } from '../SocialButton'
import EmailAuth from './EmailAuth'
import useAuthProviders from '../../hooks/useAuthProviders'

const AuthLogin = ({
  socialLabel = false,
  socialHorizontal = false
}) => {
  const { session } = useAuth()
  const { email } = useAuthProviders()
  return (
    <>
      {!session && (
        <Grid container>
          <Grid
            item
            container
            xs={12}
            justify='center'
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
          {email && (
            <>
              <Grid
                item
                xs={12}
                container
                justify='center'
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <Box
                    height='1px'
                    bgcolor='#eee'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    color='#000000de'
                  >
                    <Box
                      bgcolor='white'
                      px={1}
                    >
                      <Typography variant='subtitle1'>Or</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <EmailAuth />
              </Grid>
            </>
          )}
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
