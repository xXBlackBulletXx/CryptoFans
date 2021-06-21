import { useContext } from "react"
import AuthContext from "../contexts/Auth/AuthContext"

const useAuth = () => {
  const { session } = useContext(AuthContext)
  return {
    session
  }
}

export default useAuth