import { Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { palette } from '../../theme'
import PropTypes from 'prop-types'
// import { action } from '@storybook/addon-actions'

const useStyles = makeStyles({
  hashtag: {
    display: 'inline-block',
    color: palette.common.grayson,
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline'
    }
  },
})

const Hashtag = ({
  label = ''
}) => {
  const classes = useStyles()
  return (
    <Typography
      className={classes.hashtag}
      variant='subtitle2'
    >
      <Link
        href={`/tags/${label}`}
        color="inherit"
      >
        #{label}
      </Link>
    </Typography>
  )
}

Hashtag.propTypes = {
  label: PropTypes.string.isRequired
}

export default Hashtag
