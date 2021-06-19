import { Box, makeStyles, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import theme from '../../theme'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import HashtagContainer from '../Hashtag/HashtagContainer'

const CustomCard = withStyles({
  root: {
    minHeight: 240,
    minWidth: 240,
    width: '100%',
    height: '100vh',
    maxHeight: 380,
    transition: 'all .1s linear',
    overflow: 'hidden',
    borderRadius: 8,
    cursor: 'pointer',
    boxShadow: theme.shadows[1],
    '&:hover': {
      boxShadow: theme.shadows[3],
      marginTop: -8
    },
    '&:active': {
      marginTop: -4
    }
  }
})(Box)

const useStyles = makeStyles({
  imageContainer: {
    minHeight: '75%',
    maxHeight: '100%',
    height: props => props.fullImage ? '100%' : '75%',
    display: 'flex'
  },
  image: {
    objectFit: 'cover'
  }
})

const Card = ({
  hashtags = [],
  imageUrl = '',
  fullImage = false,
  biddable = false,
  actualBid,
  bidCurrency
}) => {
  const { t } = useTranslation('card')
  const classes = useStyles({
    fullImage
  })
  return (
    <CustomCard
      display='flex'
      flexDirection='column'
    >
      <Box className={classes.imageContainer}>
        <img
          src={imageUrl}
          width='100%'
          height='100%'
          className={classes.image}
        />
      </Box>
      {!fullImage && (
        <Box
          display='flex'
          p={2}
          flexDirection='column'
          flexGrow={1}
          justifyContent='space-evenly'
        >
          <HashtagContainer hashtags={hashtags}/>
          <Box
            width='100%'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
          >
            {biddable ? (
              <>
                <Typography
                  variant='h6'
                  component='h3'
                >{t('currentBid')}</Typography>
                <Typography
                  variant='h6'
                  component='h3'
                >{actualBid} {bidCurrency}</Typography>
              </>
            ) : (
              <>
                <Typography
                  variant='h6'
                  component='h3'
                >{t('lastBid')}</Typography>
                <Typography
                  variant='h6'
                  component='h3'
                >{actualBid} {bidCurrency}</Typography>
              </>
            )}
          </Box>
        </Box>
      )}
    </CustomCard>
  )
}

Card.propTypes = {
  hashtags: PropTypes.array,
  imageUrl: PropTypes.string.isRequired,
  fullImage: PropTypes.bool,
  biddable: PropTypes.bool.isRequired,
  actualBid: PropTypes.number,
  bidCurrency: PropTypes.string
}

export default Card