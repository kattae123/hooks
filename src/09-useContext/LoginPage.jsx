import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/userContext'

const LoginPage = () => {

  const { user } = useContext( UserContext )

  return (
    <>
        <h1>LoginPage</h1>
        <hr />


        <pre>
          { JSON.stringify( user, null, 3 )}
        </pre>
    </>
  )
}

export default LoginPage
