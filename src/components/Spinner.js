import React from 'react'

export default function Spinner() {
  return (
    <div className='text-center'>
   <div className="spinner-border text-dark" role="status">
  <span className="visually-hidden text-bg-dark my-3">Loading...</span>
</div>
    </div>
  )
}
