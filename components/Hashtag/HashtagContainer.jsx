import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { palette } from '../../theme'
import PropTypes from 'prop-types'
import Hashtag from './Hashtag'

const useStyles = makeStyles({
  hashtagContainer: {
    '& > *': {
      padding: 4,
      color: palette.common.grayson,
      fontWeight: 600,
    },
    '& > *:first-child': {
      paddingLeft: 0
    }
  }
})

const HashtagContainer = ({
  hashtags = []
}) => {
  const classes = useStyles()
  return (
    <Box
      width='100%'
      className={classes.hashtagContainer}
    >
      {hashtags.map((hashtag, index) => (
        <Hashtag
          label={hashtag}
          key={index}
        />
      ))}
    </Box>
  )
}

HashtagContainer.propTypes = {
  hashtags: PropTypes.array.isRequired
}

export default HashtagContainer
