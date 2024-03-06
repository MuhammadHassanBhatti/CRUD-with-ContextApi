import React from 'react'
import { useNumberContext } from './NumberContext';


const ShowResult = () => {

    const{
        number
    } = useNumberContext();

  return (
    <div className="container mx-5" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '30px' }}>{number}</p>
        </div>
  )
}

export default ShowResult
