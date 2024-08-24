import React from 'react'
import { useSelector } from 'react-redux'

const Box = () => {
    let value = useSelector(state=>state.value)
    const boxvalue = value.split('').join(' ');

  return (
    <div className='container-box'>
        <h3 style={{marginTop:'20px'}}>한글은 자음 모음이 합쳐지지 않습니다.</h3>
        <div className='main-display'>
                {boxvalue}
        </div>
    </div>
  )
}

export default Box