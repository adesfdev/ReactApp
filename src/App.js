import './App.css'
import { User } from './User/List'
import { CreateUser } from './User/Create'
import { useState } from 'react'


function App() {
  const [newUser, setNewUser] = useState()

  return (
    <>
      <User newUser={newUser} />
      <CreateUser setNewUser={setNewUser} />
    </>
  )
}

export default App
