import React from 'react'
import './Admin-edit.css'

const AdminEdit = () => {
  return (
    <div>
        <div className='text-center mt-5'>
            <h2>ویرایش اطلاعات هویتی</h2>

            <div className='d-flex justify-content-center'>
              <form className='admin-edit'>
                <label className=''>نام و نام خانوادگی:</label>
                <input type="text" className='form-control mt-3' placeholder='نام و نام خانوادگی خود را وارد کنید...'/>
              </form>
            </div>
        </div>
    </div>
  )
}

export default AdminEdit