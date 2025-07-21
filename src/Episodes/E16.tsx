import React from 'react'

type info1 = {
    id: number,
    name: string
}

type info2 = info1 & {
    isMarreyd: boolean,
}

// نحوه ادغام کردن تایپ ها در تایپ اسکریپت به این نحوه است از یک اند استفاده میکنیم

interface props {
  title: string,
  age: number,
}

interface props2 extends props {
  isMarried: boolean,
}

// نحوه ترکیب یا ادغام در تایپ اسکریپت به این شکل هست

const E16 = () => {
  return (
    <div className='fullCenter text-5xl'>E16</div>
  )
}

export default E16