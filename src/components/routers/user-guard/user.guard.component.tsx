import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { LoginPath } from "../../../screens/login/login.types"
import { isAuthenticated } from "../../../store/user/user.selectors"

export default function UserGuard({ children }: any) {

  const isUserAuthenticated = useSelector(isAuthenticated)
  const navigate = useNavigate()
  const from = useLocation()

  useEffect(
    () => {
      if (!isUserAuthenticated) {
        navigate(LoginPath, {
          state: { from }
        })
      }

    },
    [isUserAuthenticated]
  )

  if (isUserAuthenticated) return children

  return <></>
  
}