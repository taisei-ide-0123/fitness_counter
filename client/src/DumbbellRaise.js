import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/DumbbellRaise'

function DumbbellRaise() {
  return (
    <div>
      <P5Wrapper sketch={sketch} />
    </div>
  )
}

export default DumbbellRaise
