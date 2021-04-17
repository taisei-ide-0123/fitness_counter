import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/ArmCurl'

function ArmCurl() {
  return (
    <div>
      <P5Wrapper sketch={sketch} />
    </div>
  )
}

export default ArmCurl
