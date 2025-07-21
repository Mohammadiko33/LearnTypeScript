import React from 'react'

type Props = {sum: (num1: number , num2: number) => number}

const AnswerSum = (props: Props) => {
  return (
    <h1 className='text-6xl'>{props.sum(8 , 22)}</h1>
  )
}

export default AnswerSum