import React, { useEffect, useState } from 'react'
import { supabase } from '../../services/supabaseClient'
import AuthContext from './AuthContext'
import PropTypes from 'prop-types'

const AuthProvider = ({
  children,
  logged
}) => {
  const [session, setSession] = useState(logged)
  useEffect(() =>  {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  useEffect(() => {
    setSession(logged)
  }, [logged])
  return (
    <AuthContext.Provider
      value={{
        session
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element,
  logged: PropTypes.bool
}

export default AuthProvider
