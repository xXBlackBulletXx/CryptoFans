import { Button, withStyles } from '@material-ui/core'
import { FaGoogle } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'
import StyledButtonDefault, { defaultProps } from './StyledButtonDefault.styles'

const StyledButton = withStyles(() => ({
  root: {
    backgroundColor: '#ea4335',
    color: 'white',
    '&:hover': {
      backgroundColor: '#e55549'
    }
  },
  ...StyledButtonDefault
}))(Button)

const GoogleButton = ({
  socialLabel
}) => {
  return (
    <StyledButton
      fullWidth
      socialLabel={socialLabel}
      startIcon={<FaGoogle />}
      {...defaultProps}
    >
      {socialLabel && (
        <>
          Google
        </>
      )}
    </StyledButton>
  )
}

GoogleButton.propTypes =  {
  socialLabel: PropTypes.bool
}

export default GoogleButton
