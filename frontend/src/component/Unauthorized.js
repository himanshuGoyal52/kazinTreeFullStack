import React from 'react'
import { Link } from 'react-router-dom'

export default function Unauthorized() {
  return (
    <div className='contianer'>
        <h3>ACCESS DENIED PLEASE <Link to='/'>LOGIN</Link></h3>
    </div>
  )
}
