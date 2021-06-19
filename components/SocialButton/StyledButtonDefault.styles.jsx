export const defaultProps = {
  size: 'medium'
}

export default {
  startIcon: {
    marginLeft: ({socialLabel}) => socialLabel ? -4 : 0,
    marginRight: ({socialLabel}) => socialLabel ? 8 : 0
  }
}