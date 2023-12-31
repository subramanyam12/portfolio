import React from 'react'

const Popup = ({name,position}) => {
  return (
    <div className={`absolute bg-inherit px-3 text-base invisible group-hover:visible rounded-full ${position ? '-top-8':'-bottom-8'} `}>{name}</div>
  )
}

export default Popup