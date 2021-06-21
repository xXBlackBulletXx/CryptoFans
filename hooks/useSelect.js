import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'

const useSelect = ({
  from = '*',
  select = '*'
}) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const handleData = async () => {
      const { data, error } = await supabase.from(from).select(select)
      setLoading(false)
      setData(data)
      setError(error)
    }
    handleData()
  }, [])

  return {
    data,
    error,
    loading
  }
}

export default useSelect
