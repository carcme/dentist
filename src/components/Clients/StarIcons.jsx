import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const StarIcons = ({ type }) => {
  return (
    <>
      <FontAwesomeIcon icon={type} className='text-base' ></FontAwesomeIcon>
    </>

  )
}

export default StarIcons
