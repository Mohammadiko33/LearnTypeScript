import React from 'react'

type Props = {}

const E19 = (props: Props) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {console.log(e);}
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {console.log(e);}


  return (
    <div className='fullCenterCol'>
        <button onClick={handleClick} className='bg-blue-500 text-white p-2'>click me</button>
        {/* <button onClick={e => {}} className='bg-blue-500 text-white p-2'>click me</button> */}
        <input type="text" onChange={handleChange}/>
        {/* <input type="text" onChange={e => {}}/> */}
    </div>
  )
}

export default E19;

// برای فهمیدن تایپ ایونت هر پراپ المنت فقط کافیه توی همون اکولاد ان کلیک ایونت رو از ورودی بگیریم و روش هاور کنیم و به ما اسم ایونت رو میگه