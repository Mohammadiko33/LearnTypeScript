
import React, { useRef } from 'react'

type Props = {}

const E20 = (props: Props) => {

    const buttonRef = useRef<HTMLButtonElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='fullCenterCol'>
        <button ref={buttonRef} className='bg-blue-500 text-white p-2'>click me</button>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default E20;