import React from 'react'

type Props = {sum: (num1: number , num2: number) => number}

const AnswerSum: React.FC<Props> = ({sum}) => <h1 className='text-6xl'>{sum(8 , 22)}</h1>

export default AnswerSum;