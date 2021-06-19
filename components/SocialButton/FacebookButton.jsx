import { Button, withStyles } from '@material-ui/core'
import { FaFacebook } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'
import StyledButtonDefault from './StyledButtonDefault.styles'

const StyledButton = withStyles(() => ({
  root: {
    backgroundColor: '#1877f2',
    color: 'white',
    '&:hover': {
      backgroundColor: '#3086f6'
    },
    '&:active': {
      backgroundColor: '#0d71f3'
    }
  },
  ...StyledButtonDefault
}))(Button)

const FacebookButton = ({
  socialLabel
}) => {
  return (
    <StyledButton
      fullWidth
      socialLabel={socialLabel}
      startIcon={<FaFacebook />}
      size='large'
    >
      {socialLabel && (
        <>
          Facebook
        </>
      )}
    </StyledButton>
  )
}

FacebookButton.propTypes =  {
  socialLabel: PropTypes.bool
}

export default FacebookButton
