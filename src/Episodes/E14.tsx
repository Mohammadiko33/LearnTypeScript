import React , {useState} from 'react'
import ChildrenPropUse from './ChildrenPropUse'

const E14 = () => {

    const [userName , setUserName] = useState<string>("Amir")

  return (
    <div className='fullCenter text-5xl'><ChildrenPropUse name={userName} setName={setUserName}/></div>
  )
}

export default E14;