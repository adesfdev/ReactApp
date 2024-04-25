import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { User } from './User/List'
import { CreateUser } from './Create'
// import { Recipe } from './Recipe'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
       <User />  
       {/* <Recipe /> */}
       <CreateUser />
  </React.StrictMode>
)