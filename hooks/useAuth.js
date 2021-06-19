import { useEffect, useState } from "react"
import { supabase } from '../services/supabaseClient'

const useAuth = () => {
  const [session, setSession] = useState(null)
  useEffect(() =>  {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return {
    session
  }
}

export default useAuth