import { Box, Fab, Grid, makeStyles, withStyles } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import theme from '../../theme'
import { useScroll } from 'react-use'
import useBreakpoints from '../../hooks/useBreakpoints'

const HorizontalScrollableGrid = withStyles(({
  root: {
    overflowX: 'auto',
    flexWrap: 'nowrap',
    scrollBehavior: 'smooth',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      overflowX: 'hidden'
    }
  }
}))(Grid)

const useStyles = makeStyles({
  action: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  }
})

const HorizontalScrollable = ({
  children
}) => {
  const classes = useStyles()
  const { isMobile } = useBreakpoints()
  const containerRef = useRef(null)
  const { x } = useScroll(containerRef)
  const [canRightScroll, setCanRightScroll] = useState(true)
  const [canLeftScroll, setCanLeftScroll] = useState(false)
  const handleOnLeft = () => {
    containerRef.current.scrollTo(x - containerRef.current.offsetWidth, 0)
  }
  const handleOnRight = () => {
    containerRef.current.scrollTo(x + containerRef.current.offsetWidth, 0)
  }
  const handleOnScrollCapture = (e) => {
    setCanRightScroll(e.target.scrollLeft + e.target.offsetWidth < e.target.scrollWidth)
    setCanLeftScroll(e.target.scrollLeft > 0)
  }
  return (
    <Box position='relative' display='flex' alignItems='center' onScrollCapture={handleOnScrollCapture}>
      {canLeftScroll && (
        <Box position='absolute' left={-20} className={classes.action}>
          <Fab size='small' color='primary' onClick={handleOnLeft}>
            <ChevronLeft />
          </Fab>
        </Box>
      )}
      {(canRightScroll) && (
        <Box position='absolute' right={-20} className={classes.action}>
          <Fab size='small' color='primary' onClick={handleOnRight}>
            <ChevronRight />
          </Fab>
        </Box>
      )}
      <HorizontalScrollableGrid ref={containerRef} container spacing={3}>
        {children}
        {!isMobile && <Box minWidth={240} />}
      </HorizontalScrollableGrid>
    </Box>
  )
}

export default HorizontalScrollable