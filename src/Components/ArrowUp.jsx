import React from 'react'
import Link from '../Components/Link'
import '../stylesheets/arrow.css'

function ArrowUp() {
  return (
    <div className='arrow'>
      <Link href='#header' className='arrow' icon='arrow-up'/>
    </div>
  )
}

export default ArrowUp
