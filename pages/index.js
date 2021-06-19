import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import useAuth from '../hooks/useAuth'

const Home = () => {
  const { t } = useTranslation('home')
  const { session } = useAuth()
  console.log(session)
  return (
    <span>CIAO</span>
  )
}

export const getServerSideProps = async (ctx) => {
  return {}
}

export default Home