import React from 'react'

const Popup = ({name}) => {
  return (
    <div className='absolute bg-inherit px-3 text-base invisible group-hover:visible rounded-full -bottom-8 '>{name}</div>
  )
}

export default Popup