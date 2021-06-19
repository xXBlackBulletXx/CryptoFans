const { useMediaQuery } = require("@material-ui/core")
const { default: theme } = require("../theme")

const useBreakpoints = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const isDesktop = useMediaQuery(theme.breakpoints.down('xxl'))
  return {
    isMobile,
    isTablet,
    isDesktop
  }
}

export default useBreakpoints