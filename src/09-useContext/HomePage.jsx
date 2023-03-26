import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/userContext'

const HomePage = () => {

  const { user, setUser } = useContext( UserContext )

  return (
    <>
        <h1>HomePage <small>{ user?.name }</small></h1>
        <hr />

        <pre>
          { JSON.stringify( user, null, 3 )}
        </pre>


        <button 
        className='btn btn-primary'
        onClick={ () => setUser({
          id: 123, 
          name: 'Juan',
          email: 'juan@gmail.com',
          tlf: "04121133222"
        })}
        >
          Set user
        </button>
    </>
  )
}

export default HomePage
