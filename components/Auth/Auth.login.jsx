import { Avatar } from '@material-ui/core'
import { AccountCircleOutlined } from '@material-ui/icons'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import { supabase } from '../../services/supabaseClient'

const AuthLogin = () => {
  const { session } = useAuth()
  console.log('session', session)
  const handleOnLoginClick = async () => {
    console.log(supabase)
    const status = await supabase.auth.signIn({
      provider: 'google'
    })
    console.log(JSON.stringify(status))
  }
  return (
    <>
      {!session ? (
        <Avatar onClick={handleOnLoginClick} color='primary'>
          <AccountCircleOutlined />
        </Avatar>
      ) : (
        <span>
          AuthLogin
        </span>
      )}
    </>
  )
}

export default AuthLogin
