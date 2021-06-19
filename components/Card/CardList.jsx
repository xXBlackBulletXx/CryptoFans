import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import HorizontalScrollable from '../HorizontalScrollable/HorizontalScrollable'

const CardList = ({
  cards = [],
  sectionTitle,
  scrollableHorizontally = true
}) => {
  const { t } = useTranslation('card')
  return (
    <>
      {sectionTitle && (
        <Box pb={2}>
          <Box borderBottom='3px solid black'>
            <Typography
              variant='h4'
              component='h2'
            >{t(sectionTitle)}</Typography>
          </Box>
        </Box>
      )}
      <Box>
        {scrollableHorizontally ? (
          <HorizontalScrollable>
            {cards.map(card => (
              <Grid
                item
                xs={12}
                md={3}
                key={card.id}
              >
                <Card {...card} />
              </Grid>
            ))}
          </HorizontalScrollable>
        ) : (
          <Grid
            container
            spacing={2}
          >
            {cards.map(card => (
              <Grid
                item
                xs={12}
                md={3}
                key={card.id}
              >
                <Card {...card} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  )
}

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  sectionTitle: PropTypes.string,
  scrollableHorizontally: PropTypes.bool
}

export default CardList