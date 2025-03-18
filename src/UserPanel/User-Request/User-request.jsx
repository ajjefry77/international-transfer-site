import React from 'react'
import { Map } from '../../Map/Map'

const UserRequest = () => {
  return (
    <div className='request-map'>
      <div className='text-center mt-5'>
        <h2> درخواست خود را ثبت کنید</h2>
      </div>
        <Map/>
    </div>
  )
}

export default UserRequest