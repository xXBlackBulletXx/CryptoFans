import useSelect from './useSelect'

const useAuthProviders = () => {
  const { data = [] } = useSelect({
    from: 'auth_providers'
  })
  return {
    facebook: data?.find(value => value.provider_name === 'facebook')?.enabled,
    google: data?.find(value => value.provider_name === 'google')?.enabled,
    apple: data?.find(value => value.provider_name === 'apple')?.enabled,
    email: data?.find(value => value.provider_name === 'email')?.enabled,
  }
}

export default useAuthProviders
