import React from 'react'
import { Map } from '../../Map/Map'

const UserRequest = (props) => {
  const name = props.name
  const country = props.country
  return (
    <div className='request-map'>
      <div className='text-center mt-5'>
        <h2> درخواست خود را ثبت کنید</h2>
      </div>
        <Map name={name} country={country}/>
    </div>
  )
}

export default UserRequest